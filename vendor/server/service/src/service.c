#include "service.h"

SERVICE_STATUS ServiceStatus;
SERVICE_STATUS_HANDLE hServiceStatusHandle;
HANDLE hServiceStopEvent = NULL;

VOID WINAPI ServiceMain(DWORD dwArgc, LPTSTR *lpszArgv)
{
    // Register the handler function for the service

    hServiceStatusHandle = RegisterServiceCtrlHandler(
        SERVICENAME,
        ServiceCtrlHandler);

    if (!hServiceStatusHandle)
    {
        ServiceReportEvent(TEXT("RegisterServiceCtrlHandler"));
        exit(-1);
    }

    // These SERVICE_STATUS members remain as set here

    ServiceStatus.dwServiceType = SERVICE_WIN32_OWN_PROCESS;
    ServiceStatus.dwServiceSpecificExitCode = 0;

    // Report initial status to the SCM

    ReportServiceStatus(SERVICE_START_PENDING, NO_ERROR, 3000);

    // Perform service-specific initialization and work.

    ServiceInit(dwArgc, lpszArgv);
}

void ServiceInit(DWORD dwArgc, LPTSTR *lpszArgv)
{
    hServiceStopEvent = CreateEvent(
        NULL,  // default security attributes
        TRUE,  // manual reset event
        FALSE, // not signaled
        NULL); // no name

    if (hServiceStopEvent == NULL)
    {
        ReportServiceStatus(SERVICE_STOPPED, GetLastError(), 0);
        exit(-1);
    }

    ReportServiceStatus(SERVICE_RUNNING, NO_ERROR, 0);

    // Perform work until service stops.

    StartServer();

    while (1)
    {
        // Check whether to stop the service.

        WaitForSingleObject(hServiceStopEvent, INFINITE);

        ReportServiceStatus(SERVICE_STOPPED, NO_ERROR, 0);
        return;
    }
}

VOID ReportServiceStatus(DWORD dwCurrentState,
                         DWORD dwWin32ExitCode,
                         DWORD dwWaitHint)
{
    static DWORD dwCheckPoint = 1;

    // Fill in the SERVICE_STATUS structure.

    ServiceStatus.dwCurrentState = dwCurrentState;
    ServiceStatus.dwWin32ExitCode = dwWin32ExitCode;
    ServiceStatus.dwWaitHint = dwWaitHint;

    if (dwCurrentState == SERVICE_START_PENDING)
        ServiceStatus.dwControlsAccepted = 0;
    else
        ServiceStatus.dwControlsAccepted = SERVICE_ACCEPT_STOP;

    if ((dwCurrentState == SERVICE_RUNNING) ||
        (dwCurrentState == SERVICE_STOPPED))
        ServiceStatus.dwCheckPoint = 0;
    else
        ServiceStatus.dwCheckPoint = dwCheckPoint++;

    // Report the status of the service to the SCM.
    SetServiceStatus(hServiceStatusHandle, &ServiceStatus);
}

void WINAPI ServiceCtrlHandler(DWORD dwCtrl)
{
    // Handle the requested control code.

    switch (dwCtrl)
    {
    case SERVICE_CONTROL_STOP:
        ReportServiceStatus(SERVICE_STOP_PENDING, NO_ERROR, 0);

        // Signal the service to stop.

        SetEvent(hServiceStopEvent);
        ReportServiceStatus(ServiceStatus.dwCurrentState, NO_ERROR, 0);

        return;

    case SERVICE_CONTROL_INTERROGATE:
        break;

    default:
        break;
    }
}

void ServiceReportEvent(LPTSTR szFunction)
{
    HANDLE hEventSource;
    LPCTSTR lpszStrings[2];
    TCHAR Buffer[80];

    hEventSource = RegisterEventSource(NULL, SERVICENAME);

    if (NULL != hEventSource)
    {
        // StringCchPrintf(Buffer, 80, TEXT("%s failed with %d"), szFunction, GetLastError());

        wsprintf(Buffer, TEXT("%s failed with %d"), szFunction, GetLastError());

        lpszStrings[0] = SERVICENAME;
        lpszStrings[1] = Buffer;

        ReportEvent(hEventSource,        // event log handle
                    EVENTLOG_ERROR_TYPE, // event type
                    0,                   // event category
                    SLE_ERROR,           // event identifier
                    NULL,                // no security identifier
                    2,                   // size of lpszStrings array
                    0,                   // no binary data
                    lpszStrings,         // array of strings
                    NULL);               // no binary data

        DeregisterEventSource(hEventSource);
    }
}

void ServiceInstall()
{
    SC_HANDLE hServiceControlManager;
    SC_HANDLE hService;
    TCHAR szPath[MAX_PATH];

    if (!GetModuleFileName(NULL, szPath, MAX_PATH))
    {
        printf("Cannot install service (%ld)\n", GetLastError());
        exit(-1);
    }

    // Get a handle to the SCM database.

    hServiceControlManager = OpenSCManager(
        NULL,                   // local computer
        NULL,                   // ServicesActive database
        SC_MANAGER_ALL_ACCESS); // full access rights

    if (NULL == hServiceControlManager)
    {
        printf("OpenSCManager failed (%ld)\n", GetLastError());
        exit(-1);
    }

    // Create the service

    hService = CreateService(
        hServiceControlManager,    // SCM database
        SERVICENAME,               // name of service
        SERVICENAME,               // service name to display
        SERVICE_ALL_ACCESS,        // desired access
        SERVICE_WIN32_OWN_PROCESS, // service type
        SERVICE_AUTO_START,        // start type
        SERVICE_ERROR_NORMAL,      // error control type
        szPath,                    // path to service's binary
        NULL,                      // no load ordering group
        NULL,                      // no tag identifier
        NULL,                      // no dependencies
        NULL,                      // LocalSystem account
        NULL);                     // no password

    if (hService == NULL)
    {
        printf("CreateService failed (%ld)\n", GetLastError());
        CloseServiceHandle(hServiceControlManager);
        exit(-1);
    }
    else
        printf("Service installed successfully\n");

    CloseServiceHandle(hService);
    CloseServiceHandle(hServiceControlManager);
}

void ServiceDelete(void)
{
    SC_HANDLE hServiceControlManager;
    SC_HANDLE hService;
    BOOL bDeleteService = FALSE;

    hServiceControlManager = OpenSCManagerA(
        NULL,
        NULL,
        SC_MANAGER_ALL_ACCESS);

    if (NULL == hServiceControlManager)
    {
        printf("OpenSCManager failed (%ld)\n", GetLastError());
        exit(-1);
    }

    hService = OpenServiceA(
        hServiceControlManager,
        SERVICENAME,
        SERVICE_ALL_ACCESS);

    if (hService == NULL)
    {
        printf("Open Service failed (%ld)\n", GetLastError());
        exit(-1);
    }

    bDeleteService = DeleteService(hService);

    if (bDeleteService == FALSE)
    {
        printf("Couldn't delete service (%ld)\n", GetLastError());
        CloseServiceHandle(hService);
    }
    else
    {
        printf("Service deleted successfully!");
    }

    CloseServiceHandle(hService);
    CloseServiceHandle(hServiceControlManager);
}