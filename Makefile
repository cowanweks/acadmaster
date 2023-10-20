CXX=g++
GO=go
CCFLAGS=-g -Wall -I service/include
CXXFLAGS+=$(CCFLAGS)
DLL=bin/core.dll
BIN=bin/AcadServer.exe

all: bootstrap $(DLL) $(BIN)

.PHONY: bootstrap clean all

$(BIN): service/src/AcadServer.cpp
	$(CXX) $(CXXFLAGS) -o $@ $^

$(DLL):
	go build  -o $@ -buildmode=c-shared

bootstrap:
	mkdir -p bin

clean:
	$(RM) -rf bin