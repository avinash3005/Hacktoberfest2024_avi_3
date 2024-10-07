package scanner

import (
	"fmt"
	"net"
	"time"
)

// TCPConnectScan performs a TCP Connect scan on the specified ports
func TCPConnectScan(hostname string, ports []int) {
	for _, port := range ports {
		address := fmt.Sprintf("%s:%d", hostname, port)
		conn, err := net.DialTimeout("tcp", address, time.Second)
		if err != nil {
			fmt.Printf("Port %d is closed\n", port)
		} else {
			fmt.Printf("Port %d is open\n", port)
			conn.Close()
		}
	}
}
