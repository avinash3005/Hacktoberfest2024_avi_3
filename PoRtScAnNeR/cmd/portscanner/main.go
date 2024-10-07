package main

import (
	"fmt"
	"os"
	"strings"

	"github.com/Ayushi40804/PoRtScAnNeR/internal/scanner" // Adjust the import path as needed
	"github.com/Ayushi40804/PoRtScAnNeR/internal/utils"   // Adjust the import path as needed
)

func main() {
	if len(os.Args) < 3 {
		fmt.Println("Usage: portscanner <hostname> <ports> [scan_type]")
		fmt.Println("Example: portscanner localhost '80,443,8080' TCP")
		os.Exit(1)
	}

	hostname := os.Args[1]
	portsInput := os.Args[2]
	scanType := "TCP" // Default scan type
	if len(os.Args) == 4 {
		scanType = os.Args[3]
	}

	// Convert ports from string to slice of integers
	ports, err := utils.ParsePorts(portsInput)
	if err != nil {
		fmt.Printf("Invalid port input: %v\n", err)
		os.Exit(1)
	}

	// Perform the scan
	fmt.Printf("Scanning %s with %s scan on ports %v\n", hostname, scanType, ports)
	switch strings.ToUpper(scanType) {
	case "TCP":
		fmt.Println("Starting TCP Scan...")
		scanner.TCPConnectScan(hostname, ports)
	case "UDP":
		fmt.Println("Starting UDP Scan...")
		scanner.UDPScan(hostname, ports)
	default:
		fmt.Println("Invalid scan type selected. Please choose TCP or UDP.")
		os.Exit(1)
	}
}
