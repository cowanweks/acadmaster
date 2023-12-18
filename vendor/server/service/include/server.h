#pragma once

#include "common.h"

#define DLLNAME TEXT("core.dll")
typedef void (*pstart_server)(void);

void StartServer(void);