package scanner

import (
	"fmt"
	"net"
	"time"
)

// UDPScan performs a UDP scan on the specified ports
func UDPScan(hostname string, ports []int) {
	for _, port := range ports {
		address := fmt.Sprintf("%s:%d", hostname, port)
		conn, err := net.DialTimeout("udp", address, time.Second)
		if err != nil {
			fmt.Printf("Port %d is closed or filtered (UDP)\n", port)
			continue
		}
		defer conn.Close()

		_, err = conn.Write([]byte{})
		if err != nil {
			fmt.Printf("Failed to send UDP packet to port %d\n", port)
			continue
		}
		fmt.Printf("Port %d is open or filtered (UDP)\n", port)
	}
}
