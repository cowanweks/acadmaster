#pragma once

#include "common.h"
#include "server.h"

#define SERVICENAME TEXT("AcadServer")

void ServiceInstall(void);
void ServiceDelete(void);
void WINAPI ServiceCtrlHandler(DWORD);
void WINAPI ServiceMain(DWORD, LPTSTR *);

void ReportServiceStatus(DWORD, DWORD, DWORD);
void ServiceInit(DWORD, LPTSTR *);
void ServiceReportEvent(LPTSTR);
