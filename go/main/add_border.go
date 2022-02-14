package main

import (
	"strings"
)

func Map(vs []string, f func(string) string) []string {
	vsm := make([]string, len(vs))
	for i, v := range vs {
		vsm[i] = f(v)
	}
	return vsm
}

func AddBorder(picture []string) (ret []string) {
	wall := strings.Repeat("*", len(picture[0])+2)
	mid := Map(picture, func(s string) string {
		return "*" + s + "*"
	})
	ret = []string{wall}
	ret = append(ret, mid...)
	ret = append(ret, wall)
	return
}