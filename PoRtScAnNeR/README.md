# PoRtScAnNeR

**PoRtScAnNeR** is a simple command-line tool written in Go that performs TCP and UDP port scanning on a specified host. This project helps in checking the status of open or closed ports on a host and is useful for network diagnostics or security testing.

## Features

- **TCP Connect Scan**: Scans a list of TCP ports to check if they are open or closed.
- **UDP Scan**: Checks if specified UDP ports are open or filtered.
- **Simple CLI Usage**: Takes command-line input for hostname, ports, and scan type.
- **Port Range Parsing**: Parses a comma-separated list of ports for scanning.

## Installation

### Prerequisites

- **Go**: Make sure you have Go installed. You can download and install it from [here](https://golang.org/doc/install).

### Clone the Repository

To clone the repository and navigate to the project directory, run the following:

```bash
git clone https://github.com/YourUsername/PoRtScAnNeR.git
cd PoRtScAnNeR/cmd/portscanneR
```bash
./main.go <hostname> <ports> [scan_type]
```
 - hostname: The target host to scan (e.g., localhost or 192.168.1.1).
 - ports: A comma-separated list of ports to scan (e.g., "80,443,8080").
 - scan_type (optional): The type of scan, either TCP or UDP (defaults to TCP).
### Example Commands
1. TCP Scan on ports 80, 443, and 8080:

```bash
./portscanner localhost "80,443,8080" TCP
```
2. UDP Scan on ports 53 and 67:
```bash
./portscanner localhost "53,67" UDP
```
### Output Example
```bash
Scanning localhost with TCP scan on ports [80 443 8080]
Starting TCP Scan...
Port 80 is closed
Port 443 is closed
Port 8080 is closed
```
```bash
Scanning localhost with UDP scan on ports [53 67]
Starting UDP Scan...
Port 53 is open or filtered (UDP)
Port 67 is open or filtered (UDP)
```
## Project Structure
```bash
/PoRtScAnNeR
├── go.mod               # Go module file
├── go.sum               # Go dependencies
├── main.go              # Main application entry point
├── internal
│   ├── scanner          # Package for scanning functionality
│   │   ├── tcp.go       # TCP scanning functions
│   │   └── udp.go       # UDP scanning functions
│   └── utils            # Package for utility functions
│       └── ports.go     # Functions for parsing ports
```
 - main.go: The main program that handles user input and starts the scan.
 - internal/scanner/tcp.go: Contains the logic for performing TCP port scans.
 - internal/scanner/udp.go: Contains the logic for performing UDP port scans.
 - internal/utils/ports.go: Utility functions for parsing port input and checking port validity.