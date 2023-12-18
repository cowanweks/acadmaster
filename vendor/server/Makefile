CC=gcc
GO=go
CCFLAGS=-g -Wall -I service/include
LIBS=-lAdvapi32
LDFLAGS+=-L $(LIBS)
DLL=core.dll
BIN=AcadServer

all: bootstrap $(DLL) $(BIN)

.PHONY: bootstrap clean all

$(BIN): service/src/server.c service/src/service.c service/src/acadserver.c
	$(CC) $(CCFLAGS) -o bin/$@ $^ $(LDFLAGS)

$(DLL):
	go build  -o bin/$@ -buildmode=c-shared

bootstrap:
	mkdir -p bin

clean:
	$(RM) -rf bin