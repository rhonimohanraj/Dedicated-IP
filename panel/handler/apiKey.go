package handler

import (
	"github.com/AshkanYarmoradi/dedicated-ip/panel/util"
	"github.com/labstack/echo/v4"
	"net/http"
)

func ValidApiKey(next echo.HandlerFunc) echo.HandlerFunc {
	return func(c echo.Context) error {

		if util.ApiKey == "" {
			return c.JSON(http.StatusUnauthorized, jsonHTTPResponse{false, "UNAUTHORIZED"})
		}

		if c.Request().Header.Get("X-API-KEY") != util.ApiKey {
			return c.JSON(http.StatusUnauthorized, jsonHTTPResponse{false, "UNAUTHORIZED"})
		}

		return next(c)
	}
}
