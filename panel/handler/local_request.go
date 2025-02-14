package handler

import (
	"github.com/labstack/echo/v4"
	"net/http"
)

func ValidLocalRequest(next echo.HandlerFunc) echo.HandlerFunc {
	return func(c echo.Context) error {
		ip := c.RealIP()

		if ip != "127.0.0.1" && ip != "::1" {
			return c.JSON(http.StatusUnauthorized, jsonHTTPResponse{false, "UNAUTHORIZED"})
		}

		return next(c)
	}
}
