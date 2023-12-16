#include "acadserver.h"
#include "service.h"

int __cdecl main(int argc, char **argv)
{
    if (lstrcmpi(argv[1], TEXT("install")) == 0)
    {
        ServiceInstall();
        exit(0);
    }
    else if (lstrcmpi(argv[1], TEXT("delete")) == 0)
    {
        ServiceDelete();
        exit(0);
    }
    else
    {

        SERVICE_TABLE_ENTRY DispatchTable[] =
            {
                {SERVICENAME, (LPSERVICE_MAIN_FUNCTION)ServiceMain},
                {NULL, NULL}};

        // This call returns when the service has stopped.
        // The process should simply terminate when the call returns.

        if (!StartServiceCtrlDispatcher(DispatchTable))
        {
            ServiceReportEvent(TEXT("StartServiceCtrlDispatcher"));
        }
    }

    return 0;
}