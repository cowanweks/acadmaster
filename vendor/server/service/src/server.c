#include "server.h"

void StartServer()
{
    HMODULE hCoreDll;

    hCoreDll = LoadLibrary(DLLNAME);

    if (hCoreDll == NULL)
    {
        printf("[x] - Couldn't load the specified dll %ld\n", GetLastError());
        exit(-1);
    }

    pstart_server BootServer = (pstart_server)GetProcAddress(hCoreDll, "start_server");

    if (BootServer)
    {
        BootServer();
    }
}