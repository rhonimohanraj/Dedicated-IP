package model

type OpenPort struct {
	ClientIP     string `json:"client_ip"`
	InternalPort string `json:"internal_port"`
	ExternalPort string `json:"external_port"`
	Protocol     string `json:"protocol"`
}
