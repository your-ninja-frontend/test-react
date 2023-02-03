const advantagesList = [
  {
    id: 1,
    icon:
      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTIiIGhlaWdodD0iNTIiIHZpZXdCb3g9IjAgMCA1MiA1MiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzEwN18xMzc4KSI+CjxwYXRoIGQ9Ik0yNi42NDIxIDQ2LjE2NTZDMzkuMzkwNCA0Ni4xNjU2IDQ5LjcyNDkgMzUuODMxIDQ5LjcyNDkgMjMuMDgyOEM0OS43MjQ5IDEwLjMzNDUgMzkuMzkwNCAwIDI2LjY0MjEgMEMxMy44OTM4IDAgMy41NTkzMyAxMC4zMzQ1IDMuNTU5MzMgMjMuMDgyOEMzLjU1OTMzIDM1LjgzMSAxMy44OTM4IDQ2LjE2NTYgMjYuNjQyMSA0Ni4xNjU2WiIgZmlsbD0iI0Q4RUNGRSIvPgo8cGF0aCBkPSJNNDkuNzI0NyAyMy4wODMyQzQ5LjcyNDcgMzUuODMxNCAzOS4zOTA2IDQ2LjE2NTUgMjYuNjQyNCA0Ni4xNjU1QzE5Ljg1MTkgNDYuMTY1NSAxMy43NDU5IDQzLjIzMzEgOS41MjE5NCAzOC41NjYxQzEzLjYxNzMgNDIuMjcxOCAxOS4wNDgzIDQ0LjUyNzkgMjUuMDA0OSA0NC41Mjc5QzM3Ljc1MzEgNDQuNTI3OSA0OC4wODcyIDM0LjE5MzggNDguMDg3MiAyMS40NDU2QzQ4LjA4NzIgMTUuNDg1OSA0NS44Mjg5IDEwLjA1MjkgNDIuMTIwMSA1Ljk1NzQ2QzQ2Ljc5MDMgMTAuMTgxNCA0OS43MjQ3IDE2LjI4OTUgNDkuNzI0NyAyMy4wODMyWiIgZmlsbD0iI0M0RTJGRiIvPgo8cGF0aCBkPSJNMjYuNjQyMSAzOS4xNzQyQzM1LjUyOTIgMzkuMTc0MiA0Mi43MzM2IDMxLjk2OTggNDIuNzMzNiAyMy4wODI4QzQyLjczMzYgMTQuMTk1NyAzNS41MjkyIDYuOTkxMjcgMjYuNjQyMSA2Ljk5MTI3QzE3Ljc1NSA2Ljk5MTI3IDEwLjU1MDYgMTQuMTk1NyAxMC41NTA2IDIzLjA4MjhDMTAuNTUwNiAzMS45Njk4IDE3Ljc1NSAzOS4xNzQyIDI2LjY0MjEgMzkuMTc0MloiIGZpbGw9IiNCM0RBRkUiLz4KPHBhdGggZD0iTTQyLjczMzYgMjMuMDgzMkM0Mi43MzM2IDMxLjk3IDM1LjUyOTIgMzkuMTc0NCAyNi42NDI0IDM5LjE3NDRDMjEuNzgxIDM5LjE3NDQgMTcuNDI0MyAzNy4wMTk2IDE0LjQ3NDIgMzMuNjEyOEMxNy4yOTY4IDM2LjA1ODEgMjAuOTc4NCAzNy41MzY4IDI1LjAwNDggMzcuNTM2OEMzMy44OTE3IDM3LjUzNjggNDEuMDk2IDMwLjMzMjQgNDEuMDk2IDIxLjQ0NTZDNDEuMDk2IDE3LjQxOTEgMzkuNjE3MyAxMy43Mzc2IDM3LjE3MTkgMTAuOTE1QzQwLjU3ODcgMTMuODY1MSA0Mi43MzM2IDE4LjIyMTggNDIuNzMzNiAyMy4wODMyWiIgZmlsbD0iIzhBQzlGRSIvPgo8cGF0aCBkPSJNMTQuNzE1MSA1MS45ODM5TDE0LjM3MjQgNTEuOTM4NkMxMy4zNTg4IDUxLjgwNDggMTIuNjQ1NyA1MC44NzQ2IDEyLjc3OTcgNDkuODYxTDE1LjkxMDEgMjYuMTYyNkwxOS45MjMzIDI2LjY5MjdMMTYuNzkyNyA1MC4zOTExQzE2LjY1ODggNTEuNDA0NiAxNS43Mjg2IDUyLjExNzcgMTQuNzE1MSA1MS45ODM5WiIgZmlsbD0iIzY4NUU2OCIvPgo8cGF0aCBkPSJNMTkuOTIzIDI2LjY5MjdMMTYuNzk5NCA1MC4zMzgzQzE2LjY2MTUgNTEuMzgxMiAxNS43MDQyIDUyLjExNDggMTQuNjYxMyA1MS45NzY5TDE0LjQyNTEgNTEuOTQ1NUMxNC4wMjM3IDUxLjg5MjIgMTMuNjY4NSA1MS43MTg3IDEzLjM5MTYgNTEuNDY0N0MxNC4xMjYyIDUxLjI4MDggMTQuNzA4MyA1MC42NjQyIDE0LjgxMzkgNDkuODY4TDE3LjkxMDMgMjYuNDI3MkwxOS45MjMgMjYuNjkyN1oiIGZpbGw9IiM1NTRFNTYiLz4KPHBhdGggZD0iTTIwLjI0NDkgOC44MDIxNUwxNi4yMTE3IDguMjY5MzJDMTUuOTE0OCA4LjIzMDEyIDE1LjY0MjUgOC40Mzg5IDE1LjYwMzMgOC43MzU3NEwxNC4zOTI0IDE3LjkwMjNDMTQuMjEyMiAxOS4yNjYyIDE0LjgwNjQgMjAuNTc0OCAxNS44NjI1IDIxLjI5NjJDMTYuMjU1NiAyMS41NjQ4IDE2LjQ1NDggMjIuMDM5NSAxNi4zOTI0IDIyLjUxMTVMMTUuOTEwMiAyNi4xNjI2TDE5LjkyMzMgMjYuNjkyN0wyMC40MDU2IDIzLjA0MTZDMjAuNDY3OSAyMi41Njk2IDIwLjc4MzQgMjIuMTYyOSAyMS4yMzI4IDIyLjAwNTZDMjIuNDQgMjEuNTgzMSAyMy4zNTM2IDIwLjQ3MzcgMjMuNTMzNyAxOS4xMDk5TDI0Ljc0NDYgOS45NDMyNkMyNC43ODM4IDkuNjQ2NDMgMjQuNTc1IDkuMzc0MDggMjQuMjc4MiA5LjMzNDg4TDIwLjI0NDkgOC44MDIxNVoiIGZpbGw9IiNFMkRFRTIiLz4KPHBhdGggZD0iTTI0Ljc0NDcgOS45NDMxNkwyMy41MzM1IDE5LjExMDFDMjMuMzUzNyAyMC40NzM4IDIyLjQzOTQgMjEuNTgzNiAyMS4yMzI0IDIyLjAwNTlDMjAuNzgzIDIyLjE2MjYgMjAuNDY3NCAyMi41NjkyIDIwLjQwNTcgMjMuMDQxNUwxOS45MjMgMjYuNjkyOEwxNy45MDcxIDI2LjQyNjNMMTguNDIwMiAyMi40NDI3QzE4LjQ4MTkgMjEuOTcwNCAxOC43OTc1IDIxLjU2MzkgMTkuMjQ2OSAyMS40MDcxQzIwLjQ1MzkgMjAuOTgzOSAyMS4zNjgyIDE5Ljg3NTEgMjEuNTQ4IDE4LjUxMTRMMjIuNzU5MiA5LjM0NDUyQzIyLjc2ODYgOS4yNzE0MSAyMi43NjMzIDkuMTk5MzEgMjIuNzQ0NSA5LjEzMjM5TDI0LjI3ODYgOS4zMzUwOEMyNC41NzU0IDkuMzczNjcgMjQuNzgzNCA5LjY0NjQzIDI0Ljc0NDcgOS45NDMxNloiIGZpbGw9IiNDQkM0Q0MiLz4KPHBhdGggZD0iTTE5LjQ2ODYgOC42OTk2NkwxOC4zODA3IDE2LjkzNDNDMTguMzI5NSAxNy4zMjgzIDE3Ljk5MiAxNy42MTU3IDE3LjYwNTMgMTcuNjE1N0MxNy41NzA4IDE3LjYxNTcgMTcuNTM2MyAxNy42MTM2IDE3LjUwMTggMTcuNjA5NEMxNy4wNzI0IDE3LjU1MTkgMTYuNzcwNCAxNy4xNTc5IDE2LjgyNjcgMTYuNzI5NUwxNy45MTQ2IDguNDk0NzNWOC40OTM3MUwxOS40Njg2IDguNjk5NjZaIiBmaWxsPSIjQjVBREI2Ii8+CjxwYXRoIGQ9Ik0yMi41NzQ0IDkuMTEwMzJMMjEuNDg2NSAxNy4zNDVDMjEuNDM0MiAxNy43MzkgMjEuMDk3OCAxOC4wMjY0IDIwLjcxMTEgMTguMDI2NEMyMC42NzY2IDE4LjAyNjQgMjAuNjQyMSAxOC4wMjQzIDIwLjYwNzYgMTguMDE5MUMyMC4xNzgyIDE3Ljk2MjYgMTkuODc2MiAxNy41Njg3IDE5LjkzMjUgMTcuMTM5MkwyMS4wMjA0IDguOTA0NDhMMjIuNTc0NCA5LjExMDMyWiIgZmlsbD0iI0I1QURCNiIvPgo8cGF0aCBkPSJNMzguODY1MiA1MS45NTE0TDM4LjUyMTUgNTEuOTg4MUMzNy41MDUgNTIuMDk2OSAzNi41OTI4IDUxLjM2MSAzNi40ODQgNTAuMzQ0NEwzMy45NDA5IDI2LjU3NThMMzcuOTY1OSAyNi4xNDUxTDQwLjUwOSA0OS45MTM4QzQwLjYxNzcgNTAuOTMwNCAzOS44ODE4IDUxLjg0MjYgMzguODY1MiA1MS45NTE0WiIgZmlsbD0iIzY4NUU2OCIvPgo8cGF0aCBkPSJNMzguODExNiA1MS45NTdMMzguNTc1NCA1MS45ODJDMzguMTY5OSA1Mi4wMjQ5IDM3Ljc4MDIgNTEuOTM4MiAzNy40NDg5IDUxLjc1NDNDMzguMTI1IDUxLjQwMzEgMzguNTUxNSA1MC42NjMzIDM4LjQ2NTcgNDkuODYwN0wzNS45NTE1IDI2LjM2MDNMMzcuOTY2MiAyNi4xNDVMNDAuNTAzNSA0OS44NjA3QzQwLjYxNTQgNTAuOTA2NyAzOS44NTc3IDUxLjg0NTIgMzguODExNiA1MS45NTdaIiBmaWxsPSIjNTU0RTU2Ii8+CjxwYXRoIGQ9Ik0zNy45NjU4IDI2LjE0NTJMMzMuOTQwOCAyNi41NzU5TDMzLjYyOTIgMjMuNjY0MkMzMy41Nzc2IDIzLjE4MjUgMzMuMzQzMSAyMi43MzkgMzIuOTczOSAyMi40MjU0TDMyLjEyOTkgMjEuNzA4NEMzMS42ODMzIDIxLjMyOSAzMS40MzgxIDIwLjc2MzkgMzEuNDY2IDIwLjE3ODZMMzIuMTA5MiA2LjcxMjE0QzMyLjE1MzcgNS43ODE5NCAzMi44NjkzIDUuMDIyOTUgMzMuNzk1MyA0LjkyMzg0QzM0LjgzMjcgNC44MTI4NSAzNS43NjM3IDUuNTYzODEgMzUuODc0NyA2LjYwMTI0TDM3Ljk2NTggMjYuMTQ1MloiIGZpbGw9IiNFMkRFRTIiLz4KPHBhdGggZD0iTTM3Ljk2NjIgMjYuMTQ1MUwzNS45NTQ1IDI2LjM2MDRMMzMuODYzNSA2LjgyMDY2QzMzLjc5MTQgNi4xNTE4NSAzMy4zNzk2IDUuNjAyMTYgMzIuODE3NCA1LjMyNjI1QzMzLjA5MDIgNS4xMDc4MiAzMy40MjY2IDQuOTYyNiAzMy43OTU2IDQuOTIzOTFDMzMuODYzNSA0LjkxNjYgMzMuOTMxNSA0LjkxMzQ1IDMzLjk5ODMgNC45MTM0NUMzNC45NTIzIDQuOTEzNDUgMzUuNzcwNiA1LjYzMTQxIDM1Ljg3NTEgNi42MDExMUwzNy45NjYyIDI2LjE0NTFaIiBmaWxsPSIjQ0JDNENDIi8+CjxwYXRoIGQ9Ik00NC45NDU2IDMuMDYyMDVDNDQuNTQ3NCA0LjMzMzE1IDQzLjUxMyA2LjY0MzIxIDQxLjEwMTMgNy41NDQ5N0M0MC45MDQ0IDcuNjE4NTkgNDAuOTA0NCA3LjkwMTkyIDQxLjEwMTMgNy45NzU1NEM0My41MTMxIDguODc3MyA0NC41NDc1IDExLjE4NzQgNDQuOTQ1NiAxMi40NTg1QzQ1LjAxMyAxMi42NzM0IDQ1LjMxODUgMTIuNjczNCA0NS4zODYgMTIuNDU4NUM0NS43ODQyIDExLjE4NzQgNDYuODE4NiA4Ljg3NzMgNDkuMjMwMyA3Ljk3NTU0QzQ5LjQyNzIgNy45MDE5MiA0OS40MjcyIDcuNjE4NTkgNDkuMjMwMyA3LjU0NDk3QzQ2LjgxODUgNi42NDMyMSA0NS43ODQxIDQuMzMzMTUgNDUuMzg2IDMuMDYyMDVDNDUuMzE4NiAyLjg0NzA3IDQ1LjAxMzEgMi44NDcwNyA0NC45NDU2IDMuMDYyMDVaIiBmaWxsPSIjRkRCNDQxIi8+CjxwYXRoIGQ9Ik00OS4yMzAzIDcuOTc1NjdDNDYuODE4NSA4Ljg3NzEzIDQ1Ljc4NDQgMTEuMTg3MSA0NS4zODY0IDEyLjQ1ODRDNDUuMzE4NyAxMi42NzM3IDQ1LjAxMyAxMi42NzM3IDQ0Ljk0NTMgMTIuNDU4NEM0NC43Njc4IDExLjg5MTYgNDQuNDY0NyAxMS4xMjExIDQzLjk3MDEgMTAuMzU4NEM0NC40MTU2IDkuNDA5NTUgNDQuMzUzOSA4LjQ3NTUgNDUuNjkyIDcuOTc1NTdDNDUuODg4OCA3LjkwMTc0IDQ1Ljg4ODggNy42MTg4MiA0NS42OTIgNy41NDQ5OUM0NC4zNTM5IDcuMDQ0MTUgNDQuNDE1NiA2LjExMDIgNDMuOTcwMSA1LjE2MTMyQzQ0LjQ2NDcgNC4zOTk1OSA0NC43Njc4IDMuNjI4MTIgNDQuOTQ1MyAzLjA2MjI4QzQ1LjAxMyAyLjg0NyA0NS4zMTg3IDIuODQ3IDQ1LjM4NjQgMy4wNjIyOEM0NS43ODQ0IDQuMzMyNzcgNDYuODE4NSA2LjY0MjYyIDQ5LjIzMDMgNy41NDQ5OUM0OS40MjcyIDcuNjE4OTIgNDkuNDI3MiA3LjkwMTg0IDQ5LjIzMDMgNy45NzU2N1oiIGZpbGw9IiNGRUE2MTMiLz4KPHBhdGggZD0iTTUuNDQzMzggNDAuMTU2QzUuMTI3MzYgNDEuMTY0NyA0LjMwNjQzIDQyLjk5OCAyLjM5MjQyIDQzLjcxMzdDMi4yMzYxNCA0My43NzIxIDIuMjM2MTQgNDMuOTk3MSAyLjM5MjQyIDQ0LjA1NTRDNC4zMDY0MyA0NC43NzExIDUuMTI3MjYgNDYuNjA0MyA1LjQ0MzM4IDQ3LjYxMzFDNS40OTY4IDQ3Ljc4MzcgNS43Mzk0IDQ3Ljc4MzcgNS43OTI4MiA0Ny42MTMxQzYuMTA4ODQgNDYuNjA0NCA2LjkyOTc3IDQ0Ljc3MTIgOC44NDM3OCA0NC4wNTU0QzkuMDAwMDYgNDMuOTk3MSA5LjAwMDA2IDQzLjc3MjEgOC44NDM3OCA0My43MTM3QzYuOTI5NzcgNDIuOTk4MSA2LjEwODk0IDQxLjE2NDggNS43OTI4MiA0MC4xNTZDNS43MzkzIDM5Ljk4NTQgNS40OTY4IDM5Ljk4NTQgNS40NDMzOCA0MC4xNTZaIiBmaWxsPSIjRkRCNDQxIi8+CjxwYXRoIGQ9Ik04Ljg0MzY3IDQ0LjA1NTFDNi45Mjk2NyA0NC43NzA1IDYuMTA4OTQgNDYuNjAzNyA1Ljc5MzEyIDQ3LjYxMjZDNS43Mzk0IDQ3Ljc4MzQgNS40OTY4IDQ3Ljc4MzQgNS40NDMwOCA0Ny42MTI2QzUuMzAyMjMgNDcuMTYyOCA1LjA2MTY2IDQ2LjU1MTMgNC42NjkwNyA0NS45NDYxQzUuMDIyNTYgNDUuMTkzIDQuOTczNjIgNDQuNDUxOCA2LjAzNTYyIDQ0LjA1NUM2LjE5MTgxIDQzLjk5NjQgNi4xOTE4MSA0My43NzE5IDYuMDM1NjIgNDMuNzEzM0M0Ljk3MzYyIDQzLjMxNTggNS4wMjI1NiA0Mi41NzQ2IDQuNjY5MDcgNDEuODIxNUM1LjA2MTY2IDQxLjIxNyA1LjMwMjIzIDQwLjYwNDcgNS40NDMwOCA0MC4xNTU3QzUuNDk2OCAzOS45ODQ5IDUuNzM5NCAzOS45ODQ5IDUuNzkzMTIgNDAuMTU1N0M2LjEwODk0IDQxLjE2NCA2LjkyOTY3IDQyLjk5NzIgOC44NDM2NyA0My43MTMyQzguOTk5ODYgNDMuNzcyIDguOTk5ODYgNDMuOTk2NSA4Ljg0MzY3IDQ0LjA1NTFaIiBmaWxsPSIjRkVBNjEzIi8+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDBfMTA3XzEzNzgiPgo8cmVjdCB3aWR0aD0iNTIiIGhlaWdodD0iNTIiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg==",
    title: "Еда намного вкуснее",
    text:
      "Домашняя колбаса из мяса, соли и специй и колбаса из магазина — два настолько разных продукта, что они даже не родственники",
    labelFerm: true,
    isNegative: false
  },
  {
    id: 2,
    icon:
      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCA1NiA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzEwN18xMzEzKSI+CjxwYXRoIGQ9Ik00MC40Mjc0IDIwLjk1NDdMNDAuNzAzOCAyMC4wNjE3QzQwLjIzOTQgMTguOTg4NiAzOS4xNzE3IDE4LjIzNzYgMzcuOTI3OSAxOC4yMzc2SDM1LjI4MjZDMzMuNzE2MSAxOC4yMzc2IDMyLjQyOCAxOS40Mjg4IDMyLjI3NDQgMjAuOTU0N0g0MC40Mjc0WiIgZmlsbD0iI0ZBQzYwMCIvPgo8cGF0aCBkPSJNMzUuNTkwNyAyMC45NTQ4VjE2LjAzMzlDMzUuNTkwNyAxNS42OTU4IDM1LjMxNjYgMTUuNDIxNyAzNC45Nzg1IDE1LjQyMTdIMjcuNTEwMkMyNy4xNzIyIDE1LjQyMTcgMjYuODk4MSAxNS42OTU4IDI2Ljg5ODEgMTYuMDMzOVYyMC45NTQ4SDM1LjU5MDdaIiBmaWxsPSIjRkU5OTAxIi8+CjxwYXRoIGQ9Ik0yOS45MTY3IDIwLjk1NDhWMTYuMDMzOUMyOS45MTY3IDE1LjY5NTggMzAuMTkwOCAxNS40MjE3IDMwLjUyODkgMTUuNDIxN0gyNy41MTAyQzI3LjE3MjIgMTUuNDIxNyAyNi44OTgxIDE1LjY5NTggMjYuODk4MSAxNi4wMzM5VjIwLjk1NDhIMjkuOTE2N1oiIGZpbGw9IiNGQjg4MDEiLz4KPHBhdGggZD0iTTE1Ljg4NzggMjAuOTU0N0gyMy40MTY0QzIzLjE4NTIgMTguOTQzMSAyMS40Nzc0IDE3LjM4MDYgMTkuNDAzOCAxNy4zODA2QzE3LjY1NjcgMTcuMzgwNiAxNi4xNjg5IDE4LjQ4OTUgMTUuNjA1MyAyMC4wNDE5TDE1Ljg4NzggMjAuOTU0N1oiIGZpbGw9IiM4MEQyNjEiLz4KPHBhdGggZD0iTTE1Ljg4NzggMjAuOTU0N0gxNy44NTUzQzE4LjAzODYgMTkuMzYgMTkuMTUgMTguMDQ4MiAyMC42MzYxIDE3LjU3MjZDMjAuMjQ3NiAxNy40NDgzIDE5LjgzMzYgMTcuMzgwNiAxOS40MDM5IDE3LjM4MDZDMTcuNjU2OCAxNy4zODA2IDE2LjE2OSAxOC40ODk1IDE1LjYwNTQgMjAuMDQxOUwxNS44ODc4IDIwLjk1NDdaIiBmaWxsPSIjNjhDQTQ0Ii8+CjxwYXRoIGQ9Ik0yOC41NTMxIDIwLjk1NDdDMjguMDQxOCAxOS4zMDk3IDI2LjUwNzYgMTguMTE1MSAyNC42OTQ0IDE4LjExNTFDMjIuODgxMiAxOC4xMTUxIDIxLjM0NjkgMTkuMzA5NiAyMC44MzU2IDIwLjk1NDdIMjguNTUzMVoiIGZpbGw9IiMwMEE3RDMiLz4KPHBhdGggZD0iTTIzLjU4ODQgMjAuOTU0N0MyMy45NjM1IDE5Ljc0ODMgMjQuODg4MyAxOC43ODQxIDI2LjA3MDQgMTguMzU1OEMyNS42NDA5IDE4LjIwMDIgMjUuMTc3NiAxOC4xMTUxIDI0LjY5NDQgMTguMTE1MUMyMi44ODExIDE4LjExNTEgMjEuMzQ2OCAxOS4zMDk2IDIwLjgzNTUgMjAuOTU0N0gyMy41ODg0WiIgZmlsbD0iIzAwOTZEMyIvPgo8cGF0aCBkPSJNMTQuODY5IDUuOTY2NjRDMTUuMTI0NCA1Ljk2NjY0IDE1LjM2NDkgNi4wMzExNyAxNS41NzU2IDYuMTQ0MTZDMTUuNzg3IDUuODk5OTIgMTUuOTU3NiA1LjU4ODIgMTYuMDU2NyA1LjIyOTY3QzE2LjMzMzEgNC4yMjk5OSAxNS45NTUxIDMuMjUzMjcgMTUuMjEyNiAzLjA0Nzk3QzE0LjQ3IDIuODQyNjcgMTMuNjQ0IDMuNDg2NTYgMTMuMzY3NiA0LjQ4NjI1QzEzLjIxODQgNS4wMjYwMiAxMy4yNjEzIDUuNTU4MDIgMTMuNDQ4IDUuOTY2NjRIMTQuODY5WiIgZmlsbD0iI0Q4RUNGRSIvPgo8cGF0aCBkPSJNMTIuODg4IDUuOTY2NjRIMTMuNzAzOEMxMy44OTE4IDUuNDAzMzYgMTMuNjc0NiA0LjY0OTg3IDEzLjEwMzcgNC4wNzg5NEMxMi4zNzAzIDMuMzQ1NTggMTEuMzM0MiAzLjE5MjY3IDEwLjc4OTQgMy43Mzc0N0MxMC4yNDQ2IDQuMjgyMjcgMTAuMzk3NSA1LjMxODM3IDExLjEzMDkgNi4wNTE3M0MxMS4zMTk0IDYuMjQwMyAxMS41MjggNi4zODk3IDExLjc0MyA2LjQ5OTUyQzEyLjAxODUgNi4xNzQxMiAxMi40MjkzIDUuOTY2NjQgMTIuODg4IDUuOTY2NjRaIiBmaWxsPSIjQzRFMkZGIi8+CjxwYXRoIGQ9Ik0xMi44ODggOS4wNzY1NUgxNC44NjkxQzE1Ljc1NDQgOS4wNzY1NSAxNi40Nzg3IDguMzUyMjYgMTYuNDc4NyA3LjQ2Njk4QzE2LjQ3ODcgNi41ODE3IDE1Ljc1NDQgNS44NTc0MiAxNC44NjkxIDUuODU3NDJIMTIuODg4QzEyLjAwMjcgNS44NTc0MiAxMS4yNzg0IDYuNTgxNyAxMS4yNzg0IDcuNDY2OThDMTEuMjc4MyA4LjM1MjI2IDEyLjAwMjcgOS4wNzY1NSAxMi44ODggOS4wNzY1NVoiIGZpbGw9IiM1QTVBNUEiLz4KPHBhdGggZD0iTTEzLjEyNDkgNy40NjY3OUMxMy4xMjQ5IDYuNTgxNTEgMTMuODQ5MiA1Ljg1NzEyIDE0LjczNDYgNS44NTcxMkgxMi44ODhDMTIuMDAyNyA1Ljg1NzEyIDExLjI3ODQgNi41ODE1MSAxMS4yNzg0IDcuNDY2NzlDMTEuMjc4NCA4LjM1MjA3IDEyLjAwMjcgOS4wNzY0NiAxMi44ODggOS4wNzY0NkgxNC43MzQ2QzEzLjg0OTMgOS4wNzY0NiAxMy4xMjQ5IDguMzUyMTggMTMuMTI0OSA3LjQ2Njc5WiIgZmlsbD0iIzQ0NDQ0NCIvPgo8cGF0aCBkPSJNNDYuMDM2MiAyNS43MTJDNDYuMjU2IDI1LjU4NTUgNDYuNTEgMjUuNTEyIDQ2Ljc4MTQgMjUuNTEySDQ4LjIzMjdDNDguMzkzNyAyNS4xMTM0IDQ4LjQyMzcgMjQuNjEwMiA0OC4yODI4IDI0LjEwMDRDNDguMDA2NCAyMy4xMDA4IDQ3LjE4MDQgMjIuNDU2OSA0Ni40Mzc4IDIyLjY2MjJDNDUuNjk1MyAyMi44Njc1IDQ1LjMxNzMgMjMuODQ0MiA0NS41OTM3IDI0Ljg0MzlDNDUuNjg2NiAyNS4xODAzIDQ1Ljg0MjggMjUuNDc1IDQ2LjAzNjIgMjUuNzEyWiIgZmlsbD0iI0Q4RUNGRSIvPgo8cGF0aCBkPSJNNTAuODYwOSAyMy4zNTE4QzUwLjMxNjEgMjIuODA3IDQ5LjI4IDIyLjk1OTkgNDguNTQ2NyAyMy42OTMzQzQ3Ljk5ODkgMjQuMjQxIDQ3Ljc3NTQgMjQuOTU3NSA0Ny45MjQxIDI1LjUxMjJINDguNzYyNEM0OS4yNDMzIDI1LjUxMjIgNDkuNjcxMSAyNS43NDA1IDQ5Ljk0NTggMjYuMDkzNkM1MC4xNDcyIDI1Ljk4NTkgNTAuMzQyMyAyNS44NDM0IDUwLjUxOTYgMjUuNjY2MUM1MS4yNTI4IDI0LjkzMjcgNTEuNDA1NyAyMy44OTY1IDUwLjg2MDkgMjMuMzUxOFoiIGZpbGw9IiNDNEUyRkYiLz4KPHBhdGggZD0iTTQ4Ljc2MjUgMjguNjIySDQ2Ljc4MTRDNDUuODk2MiAyOC42MjIgNDUuMTcxOSAyNy44OTc3IDQ1LjE3MTkgMjcuMDEyNUM0NS4xNzE5IDI2LjEyNzIgNDUuODk2MiAyNS40MDI5IDQ2Ljc4MTQgMjUuNDAyOUg0OC43NjI1QzQ5LjY0NzggMjUuNDAyOSA1MC4zNzIxIDI2LjEyNzIgNTAuMzcyMSAyNy4wMTI1QzUwLjM3MjEgMjcuODk3NiA0OS42NDc4IDI4LjYyMiA0OC43NjI1IDI4LjYyMloiIGZpbGw9IiM1QTVBNUEiLz4KPHBhdGggZD0iTTQ3LjAzMTEgMjcuMDEyM0M0Ny4wMzExIDI2LjEyNyA0Ny43NTU0IDI1LjQwMjYgNDguNjQwOCAyNS40MDI2SDQ2Ljc4MTRDNDUuODk2MSAyNS40MDI2IDQ1LjE3MTggMjYuMTI2OSA0NS4xNzE4IDI3LjAxMjNDNDUuMTcxOCAyNy44OTc2IDQ1Ljg5NiAyOC42MjE5IDQ2Ljc4MTQgMjguNjIxOUg0OC42NDA4QzQ3Ljc1NTUgMjguNjIyIDQ3LjAzMTEgMjcuODk3NiA0Ny4wMzExIDI3LjAxMjNaIiBmaWxsPSIjNDQ0NDQ0Ii8+CjxwYXRoIGQ9Ik01NS42MzAzIDI5LjE4MzNDNTUuMjUxOSAyOC45MzQ2IDU0Ljc0MzIgMjkuMDM5NiA1NC40OTQyIDI5LjQxODFMNTAuNzkzNCAzNS4wNDc1SDQxLjY2MjVWNDMuOTM1Mkg0NC43MTE3QzQ0Ljk4OSA0My45MzUyIDQ1LjIxNDYgNDQuMTYwOCA0NS4yMTQ2IDQ0LjQzOFY1MS40NTkxSDUyLjA1NjFWMzYuMTEzMkw1NS44NjUgMzAuMzE5NEM1Ni4xMTM5IDI5Ljk0MDcgNTYuMDA4OCAyOS40MzIxIDU1LjYzMDMgMjkuMTgzM1oiIGZpbGw9IiNGRkU1QzIiLz4KPHBhdGggZD0iTTQ0LjM1MzkgNDMuODI1N1YzNS44Njc3QzQ0LjM1MzkgMzUuNDE0NiA0NC43MjEgMzUuMDQ3NCA0NS4xNzQyIDM1LjA0NzRINDEuNjYyNVY0My44MjU3SDQ0LjM1MzlaIiBmaWxsPSIjRkVEMkE0Ii8+CjxwYXRoIGQ9Ik0zMi45NDU0IDUxLjQ1OVY0NC40Mzc5QzMyLjk0NTQgNDQuMTYwNiAzMy4xNzEgNDMuOTM1MSAzMy40NDgyIDQzLjkzNTFINDEuNzcxOVYyMS43ODk5TDQ0LjU3NzIgMTIuNzI2QzQ0LjcxMTIgMTIuMjkzMiA0NC40Njg5IDExLjgzMzkgNDQuMDM2MSAxMS42OTk5QzQzLjYwMjggMTEuNTY1OSA0My4xNDM4IDExLjgwODIgNDMuMDA5OSAxMi4yNDFMNDAuMzQ2OCAyMC44NDU1SDE1Ljk2ODRMMTMuMzA1NCAxMi4yNDFDMTMuMTcxNCAxMS44MDgyIDEyLjcxMTggMTEuNTY1OSAxMi4yNzkxIDExLjY5OTlDMTEuODQ2MyAxMS44MzM5IDExLjYwNCAxMi4yOTMyIDExLjczOCAxMi43MjZMMTQuNTQzMyAyMS43ODk5VjUxLjQ1OUgzMi45NDU0WiIgZmlsbD0iI0ZGQjM5MiIvPgo8cGF0aCBkPSJNMTQuNTQzMyAyMS43ODk5VjI5LjY3NDhIMTYuOTk5QzE3LjI1MTUgMjkuNjc0OCAxNy40MDk0IDI5Ljk0ODIgMTcuMjgzMSAzMC4xNjdMMTUuMzg3OCAzMy40NDk4QzE2Ljc0MTkgMzMuNDYwMyAxOC4wMjc0IDMzLjgzMDkgMTkuMTM5IDM0LjQ4MjJWMjAuODQ1NUgxNS45Njg0TDEzLjMwNTQgMTIuMjQxQzEzLjE3MTQgMTEuODA4MiAxMi43MTE4IDExLjU2NTkgMTIuMjc5MSAxMS42OTk5QzExLjg0NjMgMTEuODMzOSAxMS42MDQgMTIuMjkzMiAxMS43MzggMTIuNzI2TDE0LjU0MzMgMjEuNzg5OVoiIGZpbGw9IiNGRkEzODEiLz4KPHBhdGggZD0iTTEzLjUwNjQgMzMuNTU3OUMxMy41MDc5IDMzLjU1NzkgMTMuNTA5MyAzMy41NTc4IDEzLjUxMDggMzMuNTU3OEgxNS4zMjUzTDE3LjI4MzEgMzAuMTY2OUMxNy40MDk0IDI5Ljk0ODEgMTcuMjUxNSAyOS42NzQ3IDE2Ljk5ODkgMjkuNjc0N0gxMS44MzI3QzExLjU4MDIgMjkuNjc0NyAxMS40MjIyIDI5Ljk0ODEgMTEuNTQ4NSAzMC4xNjY5TDEzLjUwNjQgMzMuNTU3OVoiIGZpbGw9IiM4MzgzODMiLz4KPHBhdGggZD0iTTEzLjUwNjMgMzMuNTU3OUMxMy41MDc4IDMzLjU1NzkgMTMuNTA5MyAzMy41NTc4IDEzLjUxMDggMzMuNTU3OEgxNS4zMjUzTDE1LjU0MSAzMy4xODQyTDEzLjc5OSAzMC4xNjY5QzEzLjY3MjcgMjkuOTQ4MSAxMy44MzA2IDI5LjY3NDcgMTQuMDgzMiAyOS42NzQ3SDExLjgzMjdDMTEuNTggMjkuNjc0NyAxMS40MjIyIDI5Ljk0ODEgMTEuNTQ4NSAzMC4xNjY5TDEzLjUwNjMgMzMuNTU3OVoiIGZpbGw9IiM1QTVBNUEiLz4KPHBhdGggZD0iTTQuNDY1ODQgNTEuNDU5SDE4Ljc0MTRMMTguNTgyMiA1MS4yNzc1QzE4LjA3MzUgNTAuNjk3MyAxNy44ODkxIDQ5LjkwNzEgMTguMDg5IDQ5LjE2MzdMMjAuMzMzNiA0MC44MTc3QzIwLjY1MzggMzkuNjI3NiAyMS4yOTk1IDM4LjU5MSAyMi4xNTc5IDM3Ljc5MTVDMjAuOTM0NyAzNS4xNzcyIDE4LjI5MjIgMzMuNDQ4NSAxNS4zMjg4IDMzLjQ0ODVIMTMuNTEwOEMxMC4xMDAxIDMzLjQ0ODUgNy4xMTM5MiAzNS43Mzc3IDYuMjI4MSAzOS4wMzE0TDMuNjM2NjcgNDguNjY2NEMzLjM0OTU2IDQ5LjczNCAzLjcyMjUzIDUwLjc5IDQuNDY1ODQgNTEuNDU5WiIgZmlsbD0iIzVBNUE1QSIvPgo8cGF0aCBkPSJNNC40NjU4NSA1MS40NTlIOC4xNjExOUM3LjQxNzg4IDUwLjc4OTkgNy4wNDQ4IDQ5LjczNCA3LjMzMjAyIDQ4LjY2NjRMOS45MjM0NCAzOS4wMzEzQzEwLjcyNjkgMzYuMDQzNyAxMy4yNTg2IDMzLjg4MjggMTYuMjY3NSAzMy41MDY4QzE1Ljk1OTEgMzMuNDY4MyAxNS42NDU3IDMzLjQ0ODQgMTUuMzI4NiAzMy40NDg0SDEzLjUxMDdDMTAuMSAzMy40NDg0IDcuMTEzODEgMzUuNzM3NSA2LjIyNzk5IDM5LjAzMTNMMy42MzY2NyA0OC42NjY0QzMuMzQ5NTYgNDkuNzM0IDMuNzIyNTMgNTAuNzg5OSA0LjQ2NTg1IDUxLjQ1OVoiIGZpbGw9IiM0NDQ0NDQiLz4KPHBhdGggZD0iTTI2LjU0MDkgMzYuMDYyN0gyOC4wOTk2TDI5Ljc2NTkgMzMuMTc2OEMyOS44OTIyIDMyLjk1OCAyOS43MzQyIDMyLjY4NDYgMjkuNDgxNyAzMi42ODQ2SDI1LjE1ODlDMjQuOTA2MyAzMi42ODQ2IDI0Ljc0ODQgMzIuOTU4IDI0Ljg3NDcgMzMuMTc2OEwyNi41NDA5IDM2LjA2MjdaIiBmaWxsPSIjODM4MzgzIi8+CjxwYXRoIGQ9Ik0yNi41NDA5IDM2LjA2MjdIMjguMDk5NkwyOC4zMjkxIDM1LjY2NTNMMjYuODkyMyAzMy4xNzY4QzI2Ljc2NiAzMi45NTggMjYuOTIzOSAzMi42ODQ2IDI3LjE3NjUgMzIuNjg0NkgyNS4xNTg4QzI0LjkwNjIgMzIuNjg0NiAyNC43NDgzIDMyLjk1OCAyNC44NzQ3IDMzLjE3NjhMMjYuNTQwOSAzNi4wNjI3WiIgZmlsbD0iIzVBNUE1QSIvPgo8cGF0aCBkPSJNMzIuOTQ1NCA1MS40NTlWNDQuNDM3OUMzMi45NDU0IDQ0LjE2MDYgMzMuMTcxIDQzLjkzNTEgMzMuNDQ4MiA0My45MzUxSDM1LjI3MDFMMzQuNDE3MyA0MC43ODA4QzMzLjY0NyAzNy45MzE5IDMxLjA2MjMgMzUuOTUzMyAyOC4xMTExIDM1Ljk1MzNIMjYuNTM2NUMyMy41ODIxIDM1Ljk1MzMgMjAuOTk1NCAzNy45MzYyIDIwLjIyODIgNDAuNzg5MkwxNy45ODM1IDQ5LjEzNTJDMTcuNzQ4IDUwLjAxMDggMTguMDI1MSA1MC44NzczIDE4LjYwMTkgNTEuNDU5SDMyLjk0NTRaIiBmaWxsPSIjNUE1QTVBIi8+CjxwYXRoIGQ9Ik0xOC42MDE3IDUxLjQ1OUgyMi4yNDkyQzIxLjY3MjUgNTAuODc3MyAyMS4zOTUzIDUwLjAxMDggMjEuNjMwOCA0OS4xMzUyTDIzLjg3NTUgNDAuNzg5MkMyNC41NTE1IDM4LjI3NTcgMjYuNjM5OCAzNi40Mzg0IDI5LjE0NzQgMzYuMDM2NUMyOC44MDg3IDM1Ljk4MjMgMjguNDYyNiAzNS45NTMzIDI4LjExMSAzNS45NTMzSDI2LjUzNjNDMjMuNTgyIDM1Ljk1MzMgMjAuOTk1MyAzNy45MzYyIDIwLjIyOCA0MC43ODkyTDE3Ljk4MzMgNDkuMTM1MkMxNy43NDc4IDUwLjAxMDggMTguMDI1MSA1MC44NzczIDE4LjYwMTcgNTEuNDU5WiIgZmlsbD0iIzQ0NDQ0NCIvPgo8cGF0aCBkPSJNNDUuMzIzOSA1MS40NTlWNDQuNDM3OUM0NS4zMjM5IDQ0LjA5OTggNDUuMDQ5OCA0My44MjU3IDQ0LjcxMTcgNDMuODI1N0gzMy40NDhDMzMuMTEgNDMuODI1NyAzMi44MzU5IDQ0LjA5OTggMzIuODM1OSA0NC40Mzc5VjUxLjQ1OUg0NS4zMjM5WiIgZmlsbD0iI0ZENDc1NSIvPgo8cGF0aCBkPSJNMzYuMDc0NSA1MS40NTlWNDQuNDM3OUMzNi4wNzQ1IDQ0LjA5OTggMzYuMzQ4NiA0My44MjU3IDM2LjY4NjcgNDMuODI1N0gzMy40NDgyQzMzLjExMDEgNDMuODI1NyAzMi44MzYgNDQuMDk5OCAzMi44MzYgNDQuNDM3OVY1MS40NTlIMzYuMDc0NVoiIGZpbGw9IiNGQjJCM0EiLz4KPHBhdGggZD0iTTUzLjIyMDcgNTIuOTkwM0gxLjU1NDc1QzEuMTAxNjEgNTIuOTkwMyAwLjczNDQzNiA1Mi42MjMgMC43MzQ0MzYgNTIuMTdDMC43MzQ0MzYgNTEuNzE3IDEuMTAxNjEgNTEuMzQ5NyAxLjU1NDc1IDUxLjM0OTdINTMuMjIwN0M1My42NzM4IDUxLjM0OTcgNTQuMDQxIDUxLjcxNyA1NC4wNDEgNTIuMTdDNTQuMDQxIDUyLjYyMyA1My42NzM4IDUyLjk5MDMgNTMuMjIwNyA1Mi45OTAzWiIgZmlsbD0iIzgzODM4MyIvPgo8cGF0aCBkPSJNMTAuNjE0OCAyNS43ODQ0QzEwLjE2MTcgMjUuNzg0NCA5Ljc5NDUzIDI1LjQxNzIgOS43OTQ1MyAyNC45NjQxVjI0LjUyNjZDOS43OTQ1MyAyNC4wNzM2IDEwLjE2MTcgMjMuNzA2MyAxMC42MTQ4IDIzLjcwNjNDMTEuMDY4IDIzLjcwNjMgMTEuNDM1MiAyNC4wNzM2IDExLjQzNTIgMjQuNTI2NlYyNC45NjQxQzExLjQzNTIgMjUuNDE3MiAxMS4wNjc5IDI1Ljc4NDQgMTAuNjE0OCAyNS43ODQ0Wk0xMC42MTQ4IDIyLjYxMjZDMTAuMTYxNyAyMi42MTI2IDkuNzk0NTMgMjIuMjQ1MyA5Ljc5NDUzIDIxLjc5MjJWMjEuMzU0N0M5Ljc5NDUzIDIwLjkwMTcgMTAuMTYxNyAyMC41MzQ0IDEwLjYxNDggMjAuNTM0NEMxMS4wNjggMjAuNTM0NCAxMS40MzUyIDIwLjkwMTcgMTEuNDM1MiAyMS4zNTQ3VjIxLjc5MjJDMTEuNDM1MiAyMi4yNDUzIDExLjA2NzkgMjIuNjEyNiAxMC42MTQ4IDIyLjYxMjZaTTEwLjE4MTIgMTkuNTEwNEM5Ljg4MjkxIDE5LjUxMDQgOS41OTUzNiAxOS4zNDcyIDkuNDUwMTEgMTkuMDYzM0M5LjM5NzgzIDE4Ljk2MTIgOS4zMzkwOSAxOC44NjA2IDkuMjc1NjYgMTguNzY0NEM5LjAyNjA2IDE4LjM4NjMgOS4xMzAxOSAxNy44Nzc1IDkuNTA4MyAxNy42Mjc5QzkuODg2MDggMTcuMzc4MiAxMC4zOTUxIDE3LjQ4MjMgMTAuNjQ0OCAxNy44NjA0QzEwLjc0MTYgMTguMDA3MSAxMC44MzEyIDE4LjE2MDQgMTAuOTEwOSAxOC4zMTY0QzExLjExNzIgMTguNzE5OCAxMC45NTc0IDE5LjIxMzkgMTAuNTUzOSAxOS40MjAyQzEwLjQzNDQgMTkuNDgxNCAxMC4zMDY4IDE5LjUxMDQgMTAuMTgxMiAxOS41MTA0Wk03LjgxODM0IDE3LjUyMTZDNy43MzgxNyAxNy41MjE2IDcuNjU2NTggMTcuNTA5OCA3LjU3NTc1IDE3LjQ4NDdDNy40NjUzOSAxNy40NTA2IDcuMzUyMTkgMTcuNDIyNCA3LjIzOTIgMTcuNDAwNkM2Ljc5NDM3IDE3LjMxNTIgNi41MDMgMTYuODg1MiA2LjU4ODQyIDE2LjQ0MDNDNi42NzM4NCAxNS45OTU0IDcuMTAyNDggMTUuNzA0IDcuNTQ4NzMgMTUuNzg5NEM3LjcyMDY3IDE1LjgyMjQgNy44OTI4MyAxNS44NjU0IDguMDYwNSAxNS45MTczQzguNDkzMyAxNi4wNTEyIDguNzM1NjcgMTYuNTEwNSA4LjYwMTggMTYuOTQzM0M4LjQ5Mjk3IDE3LjI5NTUgOC4xNjg2NyAxNy41MjE2IDcuODE4MzQgMTcuNTIxNlpNNC42Njc5MSAxNy4zMDExQzQuNjMwMjggMTcuMzAxMSA0LjU5MjMzIDE3LjI5ODUgNC41NTM5NCAxNy4yOTMyQzQuMzgzMzEgMTcuMjY5NSA0LjIxMjAzIDE3LjIzNyA0LjA0NDY5IDE3LjE5NjZDMy42MDQzNCAxNy4wOTAzIDMuMzMzNTMgMTYuNjQ3MSAzLjQzOTk1IDE2LjIwNjdDMy41NDYyNyAxNS43NjYzIDMuOTg5NDUgMTUuNDk1NCA0LjQyOTkxIDE1LjYwMThDNC41NDQ4NiAxNS42Mjk2IDQuNjYyNjYgMTUuNjUxOSA0Ljc3OTggMTUuNjY4MkM1LjIyODU2IDE1LjczMDYgNS41NDE4MSAxNi4xNDQ5IDUuNDc5MzYgMTYuNTkzNkM1LjQyMjI3IDE3LjAwMzkgNS4wNzA3MyAxNy4zMDExIDQuNjY3OTEgMTcuMzAxMVpNMS45MzQxOSAxNS44MjcyQzEuNzA2NTggMTUuODI3MiAxLjQ4MDE3IDE1LjczMyAxLjMxNzk3IDE1LjU0ODdDMS4yMDQzMyAxNS40MTk1IDEuMDk1OTQgMTUuMjgzNiAwLjk5NTc1IDE1LjE0NDRDMC43MzA4NDQgMTQuNzc2OCAwLjgxNDE4OCAxNC4yNjQyIDEuMTgxOCAxMy45OTk0QzEuNTQ5MyAxMy43MzQ2IDIuMDYxOTQgMTMuODE3OCAyLjMyNjg0IDE0LjE4NTRDMi4zOTYwOCAxNC4yODE2IDIuNDcxIDE0LjM3NTYgMi41NDk3NSAxNC40NjVDMi44NDkgMTQuODA1MiAyLjgxNTk3IDE1LjMyMzUgMi40NzU3IDE1LjYyMjdDMi4zMTk4NCAxNS43NTk4IDIuMTI2NTggMTUuODI3MiAxLjkzNDE5IDE1LjgyNzJaTTAuODIwNDIyIDEyLjkyOUMwLjM3MTg3NSAxMi45MjkgMC4wMDU3OTY4NyAxMi41NjgyIDAuMDAwNDM3NSAxMi4xMTg1TDAgMTIuMDU0OUMwLjAwMDEwOTM3NSAxMS45MDM0IDAuMDA2NTYyNSAxMS43NTE1IDAuMDE5MTQwNiAxMS42MDI3QzAuMDU3NDIxOSAxMS4xNTEzIDAuNDU1IDEwLjgxNSAwLjkwNTYyNSAxMC44NTQ0QzEuMzU3MTIgMTAuODkyNiAxLjY5MjAzIDExLjI4OTUgMS42NTM5NyAxMS43NDA5QzEuNjQ1MjIgMTEuODQ0NCAxLjY0MDczIDExLjk1MDIgMS42NDA2MiAxMi4wNTU2TDEuNjQwODQgMTIuMDk4OUMxLjY0NjMxIDEyLjU1MTkgMS4yODM0MSAxMi45MjM2IDAuODMwNDg0IDEyLjkyODlDMC44MjcyMDMgMTIuOTI5IDAuODIzNzAzIDEyLjkyOSAwLjgyMDQyMiAxMi45MjlaTTEuODYzMzEgMTAuMDA1QzEuNjc3NDggMTAuMDA1IDEuNDkwNDUgOS45NDIxMiAxLjMzNjg5IDkuODEzNDlDMC45ODk2MjUgOS41MjI0NSAwLjk0NDAxNiA5LjAwNTEgMS4yMzUwNiA4LjY1Nzg0QzEuMzQ1NDIgOC41MjYxNSAxLjQ2MzY2IDguMzk4MjkgMS41ODY1OSA4LjI3Nzg3QzEuOTA5OTEgNy45NjA3OSAyLjQyOTMzIDcuOTY1ODIgMi43NDY1MiA4LjI4OTU3QzMuMDYzNTkgOC42MTMxIDMuMDU4NDUgOS4xMzI1MyAyLjczNDgxIDkuNDQ5NkMyLjY1MDE2IDkuNTMyNjIgMi41Njg1NiA5LjYyMDc4IDIuNDkyNDQgOS43MTE2N0MyLjMzMDIzIDkuOTA1MjYgMi4wOTc1OSAxMC4wMDUgMS44NjMzMSAxMC4wMDVaTTQuNTU5MyA4LjQ2NTc4QzQuMTY0NDUgOC40NjU3OCAzLjgxNjUzIDguMTgwMDkgMy43NTA2OSA3Ljc3NzdDMy42Nzc1MiA3LjMzMDU3IDMuOTgwNyA2LjkwODkzIDQuNDI3NzIgNi44MzU3NkM0LjU5NzM2IDYuODA4MDkgNC43NzAwNiA2Ljc4ODI5IDQuOTQxMjMgNi43NzcxM0M1LjM5MzI4IDYuNzQ3MzggNS43ODM2NCA3LjA5MDM4IDUuODEzMTcgNy41NDI0M0M1Ljg0MjU5IDcuOTk0NDggNS40OTk5MiA4LjM4NDk1IDUuMDQ3ODcgOC40MTQzN0M0LjkyOTQyIDguNDIyMDMgNC44MDk4OCA4LjQzNTcgNC42OTI2MyA4LjQ1NDk1QzQuNjQ3NzggOC40NjIxNyA0LjYwMzE2IDguNDY1NzggNC41NTkzIDguNDY1NzhaTTguMTY2MTYgOC40MDY0OUg3LjcyODY2QzcuMjc1NTIgOC40MDY0OSA2LjkwODM0IDguMDM5MjEgNi45MDgzNCA3LjU4NjE4QzYuOTA4MzQgNy4xMzMxNSA3LjI3NTUyIDYuNzY1ODcgNy43Mjg2NiA2Ljc2NTg3SDguMTY2MTZDOC42MTkzIDYuNzY1ODcgOC45ODY0NyA3LjEzMzE1IDguOTg2NDcgNy41ODYxOEM4Ljk4NjQ3IDguMDM5MjEgOC42MTkzIDguNDA2NDkgOC4xNjYxNiA4LjQwNjQ5WiIgZmlsbD0iI0M0RTJGRiIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzEwN18xMzEzIj4KPHJlY3Qgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=",
    title: "Просроченные продукты",
    text:
      "Из-за большого количество товара сотрудники магазинов не успевают своевременно производить замену товара",
    labelMagazine: true,
    isNegative: true
  },
  {
    id: 3,
    icon:
      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCA1NiA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTMwLjk0MzggMjMuMTE0MkMzMC41MjEzIDIzLjU2MDEgMjkuOTI0IDIzLjc5NSAyOS4zMDk2IDIzLjc1N0MyOS4wOTcxIDIzLjc0MzUgMjQuMDQ1NSAyMy4zOTYzIDE4Ljg3ODYgMjAuNjEyQzEzLjk5NiAxNy45ODA5IDguMTA0MDIgMTIuNjQyMSA3Ljc2MTg5IDIuMTQ5MTFDNy43NDMwOCAxLjU3Njg2IDcuOTYyMTYgMS4wMjI1NCA4LjM2Njg0IDAuNjE3NjM5QzguOTg0MTYgMCA5LjcwODY1IDAgMTAuMDE4MSAwQzEwLjAxODIgMCAxMC4wMTgyIDAgMTAuMDE4MiAwQzEwLjIzNyAwIDE1LjM4MjUgMC4wMzY5Njg2IDIwLjY4NDIgMy4yMTU5NUMyMy40MzY0IDQuODY2MyAyNS43MjQ1IDcuMDYwMjUgMjcuNDg1MiA5LjczNzA5QzI5LjYxMjIgMTIuOTcwOSAzMC45NjE4IDE2LjkxMDkgMzEuNDk2OSAyMS40NDc0QzMxLjU2ODkgMjIuMDU3NyAzMS4zNjYyIDIyLjY2ODEgMzAuOTQzOCAyMy4xMTQyWiIgZmlsbD0iIzZEQzgyQSIvPgo8cGF0aCBkPSJNMjcuNTUwMSA5LjgzOTY2QzI2LjY4MTggMTEuNDQyIDI1Ljk0OTYgMTMuMjQ2NyAyNS40MjQxIDE1LjI3OTdDMjQuOTUxNiAxNi42OTA5IDI0LjIzMDEgMTkuMTcwMiAyMy42MzQ2IDIyLjYwMDVDMjYuNzc1NyAyMy41ODM2IDI5LjE2NDkgMjMuNzQ3OSAyOS4zMDk2IDIzLjc1N0MyOS45MjQgMjMuNzk1MSAzMC41MjEyIDIzLjU2MDIgMzAuOTQzOCAyMy4xMTQyQzMxLjM2NjIgMjIuNjY4MSAzMS41Njg4IDIyLjA1NzcgMzEuNDk2OCAyMS40NDc2QzMwLjk2NzMgMTYuOTU4MyAyOS42Mzg3IDEzLjA1NDMgMjcuNTUwMSA5LjgzOTY2WiIgZmlsbD0iIzVFQUMyNCIvPgo8cGF0aCBkPSJNMjkuMTY3NCAxOS41NjIyTDI0LjcwNjIgMTUuMjExOEwyMy41Mjk4IDkuMzQ5NTdDMjMuNDM2NyA4Ljg4NDk0IDIyLjk4NDcgOC41ODQyNyAyMi41MiA4LjY3NzI0QzIyLjA1NTMgOC43NzA0MyAyMS43NTQ1IDkuMjIyNjkgMjEuODQ3NiA5LjY4NzFMMjIuNTMwNyAxMy4wOTA0TDIwLjA3MDMgMTAuNjkxMkwxOC44Nzc3IDQuNzQ4MjhDMTguNzg0NiA0LjI4MzY1IDE4LjMzMjMgMy45ODMzMSAxNy44Njc4IDQuMDc1OTVDMTcuNDAzMiA0LjE2OTE0IDE3LjEwMjQgNC42MjEyOSAxNy4xOTU1IDUuMDg1ODFMMTcuODk0NiA4LjU2OTYxTDEyLjE1MzMgMi45NzEzOEMxMS44MTM4IDIuNjQwNjMgMTEuMjcxMSAyLjY0NzYzIDEwLjk0MDIgMi45ODY2OUMxMC42MDk1IDMuMzI1OTcgMTAuNjE2NCAzLjg2OTAxIDEwLjk1NTUgNC4xOTk2NUwxNy4yNjg1IDEwLjM1NTdMMTIuODY0NyAxMC4yODA1QzEyLjM5MTQgMTAuMjY3NSAxMi4wMDA1IDEwLjY0OTggMTEuOTkyMyAxMS4xMjM1QzExLjk4NDMgMTEuNTk3MiAxMi4zNjE3IDExLjk4NzcgMTIuODM1NCAxMS45OTU5TDE5LjA1OTYgMTIuMTAyM0wyMS45ODgxIDE0Ljk1ODFMMTcuNTE2OCAxNC44ODE5QzE3LjA0NzQgMTQuODcxNCAxNi42NTI3IDE1LjI1MTIgMTYuNjQ0NCAxNS43MjQ5QzE2LjYzNjUgMTYuMTk4NiAxNy4wMTM4IDE2LjU4OTEgMTcuNDg3NSAxNi41OTczTDIzLjc3OSAxNi43MDQ3TDI3Ljk2OTIgMjAuNzkwN0MyOC4xMzYxIDIwLjk1MzQgMjguMzUyMSAyMS4wMzQzIDI4LjU2NzkgMjEuMDM0M0MyOC43OTExIDIxLjAzNDMgMjkuMDE0IDIwLjk0NzcgMjkuMTgyMyAyMC43NzUzQzI5LjUxMzQgMjAuNDM1OSAyOS41MDY2IDE5Ljg5MjkgMjkuMTY3NCAxOS41NjIyWiIgZmlsbD0iIzRFOTAxRSIvPgo8cGF0aCBkPSJNNTEuMTY4MSAwLjY0Njc5N0M1MC43NDU2IDAuMjAwODc2IDUwLjE0ODMgLTAuMDM0MDYxMSA0OS41MzQgMC4wMDQwMDEzNUM0OS4zMjE1IDAuMDE3NDU0NCA0NC4yNjk5IDAuMzY0NzIgMzkuMTAzIDMuMTQ4OTZDMzUuMTMyNiA1LjI4ODQ0IDMwLjQ5NTEgOS4yMTg1IDI4LjcxNjcgMTYuMjU0MUMyNy43NDUzIDE5LjExNDYgMjUuNjA1NCAyNi44NzIgMjYuMTA1OSAzOC41NTIyQzI2LjE0OTIgMzkuNTYyNyAyNi45ODIgNDAuMzUyOCAyNy45ODM5IDQwLjM1MjdDMjguMDExIDQwLjM1MjcgMjguMDM4MyA0MC4zNTIxIDI4LjA2NTggNDAuMzUwOUMyOS4xMDM3IDQwLjMwNjQgMjkuOTA5IDM5LjQyOTEgMjkuODY0NiAzOC4zOTExQzI5LjYwNTIgMzIuMzQwMSAzMC4xMDM0IDI3LjM5MzQgMzAuNzQ1NSAyMy43NDMzQzMyLjE5MDIgMjMuNjYwNSAzNi40OTQ5IDIzLjE5MTUgNDAuOTA4NiAyMC41NDVDNDMuNjYwOCAxOC44OTQ3IDQ1Ljk0ODkgMTYuNzAwNyA0Ny43MDk2IDE0LjAyMzlDNDkuODM2NSAxMC43OTAxIDUxLjE4NjIgNi44NTAxIDUxLjcyMTMgMi4zMTM1NkM1MS43OTMyIDEuNzAzMjUgNTEuNTkwNiAxLjA5MjgzIDUxLjE2ODEgMC42NDY3OTdaIiBmaWxsPSIjOTFEQzVBIi8+CjxwYXRoIGQ9Ik00OC40NjcxIDIuOTg2NzNDNDguMTM2MiAyLjY0NzU2IDQ3LjU5MzEgMi42NDA2NyA0Ny4yNTQgMi45NzE0Mkw0MS41MTMyIDguNTY5NTVMNDIuMjEyMyA1LjA4NTg1QzQyLjMwNTQgNC42MjEzNCA0Mi4wMDQ2IDQuMTY5MjkgNDEuNTQgNC4wNzU5OUM0MS4wNzYgMy45ODMyNCA0MC42MjMzIDQuMjgzNyA0MC41MzAxIDQuNzQ4MzJMMzkuMzM3NCAxMC42OTEyTDM2Ljg3NzEgMTMuMDkwNEwzNy41NjAyIDkuNjg3MTRDMzcuNjUzMyA5LjIyMjYyIDM3LjM1MjUgOC43NzA1OCAzNi44ODc4IDguNjc3MjhDMzYuNDIzNCA4LjU4NDMxIDM1Ljk3MTIgOC44ODQ5OCAzNS44NzggOS4zNDk2MUwzNC43MDE0IDE1LjIxMkwzMC4yNDAxIDE5LjU2MjRDMjkuOTAwOSAxOS44OTMxIDI5Ljg5NDIgMjAuNDM2MiAzMC4yMjQ4IDIwLjc3NTNDMzAuMzkzMSAyMC45NDc3IDMwLjYxNTggMjEuMDM0MiAzMC44MzkyIDIxLjAzNDJDMzEuMDU1MSAyMS4wMzQyIDMxLjI3MTIgMjAuOTUzMyAzMS40Mzc5IDIwLjc5MDZMMzUuNjI4MiAxNi43MDQ2TDQxLjkxOTggMTYuNTk3MkM0Mi4zOTM1IDE2LjU4OTEgNDIuNzcwOSAxNi4xOTg3IDQyLjc2MjkgMTUuNzI0OEM0Mi43NTQ5IDE1LjI1NjEgNDIuMzcyNCAxNC44ODE3IDQxLjkwNTUgMTQuODgxN0M0MS45MDA1IDE0Ljg4MTcgNDEuODk1NSAxNC44ODE3IDQxLjg5MDUgMTQuODgxOEwzNy40MTkyIDE0Ljk1OEw0MC4zNDc3IDEyLjEwMjJMNDYuNTcxOSAxMS45OTU4QzQ3LjA0NTYgMTEuOTg3NyA0Ny40MjI5IDExLjU5NzMgNDcuNDE0OSAxMS4xMjM0QzQ3LjQwNyAxMC42NTQ3IDQ3LjAyNDUgMTAuMjgwMyA0Ni41NTc2IDEwLjI4MDNDNDYuNTUyNSAxMC4yODAzIDQ2LjU0NzUgMTAuMjgwMyA0Ni41NDI2IDEwLjI4MDRMNDIuMTM4NyAxMC4zNTU2TDQ4LjQ1MTcgNC4xOTk1OUM0OC43OTExIDMuODY4OTUgNDguNzk3OSAzLjMyNTkgNDguNDY3MSAyLjk4NjczWiIgZmlsbD0iIzVFQUMyNCIvPgo8cGF0aCBkPSJNNDkuMTMwNCA0NC44NTczQzQ4LjI2NTIgNDQuODU3MyA0Ny40NTcyIDQ1LjEwMSA0Ni43NzA0IDQ1LjUyMzFDNDUuNzU2MSA0Mi4yMDQ0IDQyLjY2OTggMzkuNzkwMyAzOS4wMTkxIDM5Ljc5MDNDMzguNjE0IDM5Ljc5MDMgMzguMjE2MiAzOS44MjA5IDM3LjgyNzIgMzkuODc4M0MzNi4xNzIzIDM2LjA5MjQgMzIuMzk2MiAzMy40NDU3IDI4LjAwMDMgMzMuNDQ1N0MyMy42MDQ0IDMzLjQ0NTcgMTkuODI4MiAzNi4wOTI0IDE4LjE3MzQgMzkuODc4M0MxNy43ODQyIDM5LjgyMDkgMTcuMzg2MyAzOS43OTAzIDE2Ljk4MTQgMzkuNzkwM0MxMy4zMzA3IDM5Ljc5MDMgMTAuMjQ0NiA0Mi4yMDQ0IDkuMjMwMTQgNDUuNTIzMUM4LjU0MzM3IDQ1LjEwMSA3LjczNTQyIDQ0Ljg1NzMgNi44NzAxNiA0NC44NTczQzQuMzc2OTYgNDQuODU3MyAyLjM1NTcxIDQ2Ljg3ODYgMi4zNTU3MSA0OS4zNzE4QzIuMzU1NzEgNTEuODY1IDQuMzc2OTYgNTMuODg2MiA2Ljg3MDE2IDUzLjg4NjJDOC4yMDYyOCA1My44ODYyIDkuNDA2MzQgNTMuMzA1NCAxMC4yMzI4IDUyLjM4M0MxMS42ODU1IDU0LjU2MjkgMTQuMTY1MiA1NiAxNi45ODEzIDU2QzE5LjI2MTkgNTYgMjEuMzIxMyA1NS4wNTY2IDIyLjc5MzkgNTMuNTQwNUMyNC4zMzU4IDU0LjM5ODkgMjYuMTEwMyA1NC44ODk1IDI4LjAwMDMgNTQuODg5NUMyOS44OTAyIDU0Ljg4OTUgMzEuNjY0OCA1NC4zOTg4IDMzLjIwNjYgNTMuNTQwNUMzNC42Nzk1IDU1LjA1NjYgMzYuNzM4NyA1NiAzOS4wMTkyIDU2QzQxLjgzNTMgNTYgNDQuMzE1MiA1NC41NjMxIDQ1Ljc2NzggNTIuMzgzQzQ2LjU5NDMgNTMuMzA1NCA0Ny43OTQ0IDUzLjg4NjIgNDkuMTMwNCA1My44ODYyQzUxLjYyMzYgNTMuODg2MiA1My42NDQ4IDUxLjg2NSA1My42NDQ4IDQ5LjM3MThDNTMuNjQ0OCA0Ni44Nzg1IDUxLjYyMzYgNDQuODU3MyA0OS4xMzA0IDQ0Ljg1NzNaIiBmaWxsPSIjQ0M3NDAwIi8+CjxwYXRoIGQ9Ik0zMy44OTQgMzcuODM0N0MzNC45NjAxIDM3LjgzNDcgMzUuOTg4OSAzNy45OTI1IDM2Ljk2MSAzOC4yODIzQzM1LjA0NDIgMzUuMzY5NiAzMS43NDc2IDMzLjQ0NTYgMjguMDAwMiAzMy40NDU2QzIzLjYwNDIgMzMuNDQ1NiAxOS44MjgxIDM2LjA5MjQgMTguMTczMyAzOS44NzgzQzE3Ljc4NDEgMzkuODIwOSAxNy4zODYyIDM5Ljc5MDIgMTYuOTgxMyAzOS43OTAyQzEzLjMzMDYgMzkuNzkwMiAxMC4yNDQ1IDQyLjIwNDMgOS4yMzAwNSA0NS41MjNDOC41NDMyOCA0NS4xMDA5IDcuNzM1MzMgNDQuODU3MiA2Ljg3MDA3IDQ0Ljg1NzJDNC4zNzY4NyA0NC44NTcyIDIuMzU1NjIgNDYuODc4NSAyLjM1NTYyIDQ5LjM3MTdDMi4zNTU2MiA1MS44NjQ5IDQuMzc2ODcgNTMuODg2MSA2Ljg3MDA3IDUzLjg4NjFDOC4yMDYxOSA1My44ODYxIDkuNDA2MjUgNTMuMzA1MyAxMC4yMzI3IDUyLjM4MjlDMTEuNjg1NCA1NC41NjI4IDE0LjE2NTEgNTUuOTk5OSAxNi45ODEyIDU1Ljk5OTlDMTkuMjYxOCA1NS45OTk5IDIxLjMyMTIgNTUuMDU2NSAyMi43OTM4IDUzLjU0MDRDMjMuNDY2MyA1My45MTQ4IDI0LjE4MjkgNTQuMjE4OSAyNC45MzQgNTQuNDQzM0MyMy44MjE0IDUyLjc1MzMgMjMuMTcyMiA1MC43MzEyIDIzLjE3MjIgNDguNTU2NkMyMy4xNzIyIDQyLjYzNTIgMjcuOTcyNSAzNy44MzQ3IDMzLjg5NCAzNy44MzQ3WiIgZmlsbD0iI0FBNjEwMCIvPgo8cGF0aCBkPSJNMzIuMjY0MSA0Ny45OTJDMzMuMzM3NSA0Ny45OTIgMzQuMjA3NyA0Ny4xMjE4IDM0LjIwNzcgNDYuMDQ4M0MzNC4yMDc3IDQ0Ljk3NDggMzMuMzM3NSA0NC4xMDQ2IDMyLjI2NDEgNDQuMTA0NkMzMS4xOTA2IDQ0LjEwNDYgMzAuMzIwNCA0NC45NzQ4IDMwLjMyMDQgNDYuMDQ4M0MzMC4zMjA0IDQ3LjEyMTggMzEuMTkwNiA0Ny45OTIgMzIuMjY0MSA0Ny45OTJaIiBmaWxsPSIjQUE2MTAwIi8+CjxwYXRoIGQ9Ik00MC4xMDEgNTIuNTY5MkM0MS4xNzQ1IDUyLjU2OTIgNDIuMDQ0NyA1MS42OTkgNDIuMDQ0NyA1MC42MjU1QzQyLjA0NDcgNDkuNTUyIDQxLjE3NDUgNDguNjgxOCA0MC4xMDEgNDguNjgxOEMzOS4wMjc1IDQ4LjY4MTggMzguMTU3MyA0OS41NTIgMzguMTU3MyA1MC42MjU1QzM4LjE1NzMgNTEuNjk5IDM5LjAyNzUgNTIuNTY5MiA0MC4xMDEgNTIuNTY5MloiIGZpbGw9IiNBQTYxMDAiLz4KPHBhdGggZD0iTTM4LjkwNTcgNDQuNzIyNkMzOS4zMTg4IDQ0LjcyMjYgMzkuNjUzNiA0NC4zODc3IDM5LjY1MzYgNDMuOTc0NkMzOS42NTM2IDQzLjU2MTYgMzkuMzE4OCA0My4yMjY3IDM4LjkwNTcgNDMuMjI2N0MzOC40OTI3IDQzLjIyNjcgMzguMTU3OCA0My41NjE2IDM4LjE1NzggNDMuOTc0NkMzOC4xNTc4IDQ0LjM4NzcgMzguNDkyNyA0NC43MjI2IDM4LjkwNTcgNDQuNzIyNloiIGZpbGw9IiNBQTYxMDAiLz4KPHBhdGggZD0iTTI4LjAwMDIgNTIuMTIxNUMyOC40MTMyIDUyLjEyMTUgMjguNzQ4MSA1MS43ODY2IDI4Ljc0ODEgNTEuMzczNkMyOC43NDgxIDUwLjk2MDUgMjguNDEzMiA1MC42MjU3IDI4LjAwMDIgNTAuNjI1N0MyNy41ODcxIDUwLjYyNTcgMjcuMjUyMyA1MC45NjA1IDI3LjI1MjMgNTEuMzczNkMyNy4yNTIzIDUxLjc4NjYgMjcuNTg3MSA1Mi4xMjE1IDI4LjAwMDIgNTIuMTIxNVoiIGZpbGw9IiNBQTYxMDAiLz4KPHBhdGggZD0iTTMwLjMxOTcgNDEuOTI3M0MzMC43MzI3IDQxLjkyNzMgMzEuMDY3NiA0MS41OTI0IDMxLjA2NzYgNDEuMTc5NEMzMS4wNjc2IDQwLjc2NjMgMzAuNzMyNyA0MC40MzE1IDMwLjMxOTcgNDAuNDMxNUMyOS45MDY2IDQwLjQzMTUgMjkuNTcxOCA0MC43NjYzIDI5LjU3MTggNDEuMTc5NEMyOS41NzE4IDQxLjU5MjQgMjkuOTA2NiA0MS45MjczIDMwLjMxOTcgNDEuOTI3M1oiIGZpbGw9IiNBQTYxMDAiLz4KPHBhdGggZD0iTTQ2LjQxMzMgNDguNzQwNkM0Ni44MjY0IDQ4Ljc0MDYgNDcuMTYxMiA0OC40MDU4IDQ3LjE2MTIgNDcuOTkyN0M0Ny4xNjEyIDQ3LjU3OTcgNDYuODI2NCA0Ny4yNDQ4IDQ2LjQxMzMgNDcuMjQ0OEM0Ni4wMDAzIDQ3LjI0NDggNDUuNjY1NCA0Ny41Nzk3IDQ1LjY2NTQgNDcuOTkyN0M0NS42NjU0IDQ4LjQwNTggNDYuMDAwMyA0OC43NDA2IDQ2LjQxMzMgNDguNzQwNloiIGZpbGw9IiNBQTYxMDAiLz4KPHBhdGggZD0iTTQyLjA0NTMgMzYuNjM5MUM0My4xMTg4IDM2LjYzOTEgNDMuOTg5IDM1Ljc2ODkgNDMuOTg5IDM0LjY5NTRDNDMuOTg5IDMzLjYyMTkgNDMuMTE4OCAzMi43NTE3IDQyLjA0NTMgMzIuNzUxN0M0MC45NzE4IDMyLjc1MTcgNDAuMTAxNiAzMy42MjE5IDQwLjEwMTYgMzQuNjk1NEM0MC4xMDE2IDM1Ljc2ODkgNDAuOTcxOCAzNi42MzkxIDQyLjA0NTMgMzYuNjM5MVoiIGZpbGw9IiNDQzc0MDAiLz4KPHBhdGggZD0iTTQ2LjQxMzMgMzkuNzg5NUM0Ni44MjY0IDM5Ljc4OTUgNDcuMTYxMiAzOS40NTQ3IDQ3LjE2MTIgMzkuMDQxNkM0Ny4xNjEyIDM4LjYyODYgNDYuODI2NCAzOC4yOTM3IDQ2LjQxMzMgMzguMjkzN0M0Ni4wMDAzIDM4LjI5MzcgNDUuNjY1NCAzOC42Mjg2IDQ1LjY2NTQgMzkuMDQxNkM0NS42NjU0IDM5LjQ1NDcgNDYuMDAwMyAzOS43ODk1IDQ2LjQxMzMgMzkuNzg5NVoiIGZpbGw9IiNDQzc0MDAiLz4KPHBhdGggZD0iTTQ2LjQxMzMgMzYuMTkxM0M0Ni44MjY0IDM2LjE5MTMgNDcuMTYxMiAzNS44NTY1IDQ3LjE2MTIgMzUuNDQzNEM0Ny4xNjEyIDM1LjAzMDMgNDYuODI2NCAzNC42OTU1IDQ2LjQxMzMgMzQuNjk1NUM0Ni4wMDAzIDM0LjY5NTUgNDUuNjY1NCAzNS4wMzAzIDQ1LjY2NTQgMzUuNDQzNEM0NS42NjU0IDM1Ljg1NjUgNDYuMDAwMyAzNi4xOTEzIDQ2LjQxMzMgMzYuMTkxM1oiIGZpbGw9IiNDQzc0MDAiLz4KPHBhdGggZD0iTTEyLjMwOCAzNS45NTI5QzEzLjM4MTQgMzUuOTUyOSAxNC4yNTE3IDM1LjA4MjcgMTQuMjUxNyAzNC4wMDkyQzE0LjI1MTcgMzIuOTM1NyAxMy4zODE0IDMyLjA2NTUgMTIuMzA4IDMyLjA2NTVDMTEuMjM0NSAzMi4wNjU1IDEwLjM2NDMgMzIuOTM1NyAxMC4zNjQzIDM0LjAwOTJDMTAuMzY0MyAzNS4wODI3IDExLjIzNDUgMzUuOTUyOSAxMi4zMDggMzUuOTUyOVoiIGZpbGw9IiNBQTYxMDAiLz4KPHBhdGggZD0iTTkuMDgwMyAzOS4wNDE2QzkuNDkzMzYgMzkuMDQxNiA5LjgyODIxIDM4LjcwNjggOS44MjgyMSAzOC4yOTM3QzkuODI4MjEgMzcuODgwNyA5LjQ5MzM2IDM3LjU0NTggOS4wODAzIDM3LjU0NThDOC42NjcyNSAzNy41NDU4IDguMzMyNCAzNy44ODA3IDguMzMyNCAzOC4yOTM3QzguMzMyNCAzOC43MDY4IDguNjY3MjUgMzkuMDQxNiA5LjA4MDMgMzkuMDQxNloiIGZpbGw9IiNBQTYxMDAiLz4KPC9zdmc+Cg==",
    title: "Натуральные продукты",
    text:
      "Поставляем местные органические продукты выращенные без пестицидов и химических удобрений.",
    labelFerm: true,
    isNegative: false
  },
  {
    id: 4,
    icon:
      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCA1NiA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzEwN18xMzY4KSI+CjxwYXRoIGQ9Ik00Ni42NjY2IDI2LjEzMzNWMzIuNjY2NkM0Ni42NjY2IDQxLjE2IDM3LjMzMzMgNDYuNjY2NiAzMC4yNjggNDIuNDI5M0wyNC42NjggMzkuMDZDMjMuODAxMyAzOC41MzUyIDIyLjgwNjQgMzguMjYwNyAyMS43OTMzIDM4LjI2NjZDMjAuNTI1OCAzOC4xNzc0IDE5LjI2MzkgMzguNTA1MiAxOC4yIDM5LjJDMTYuNDYxNyA0MC4zNTk1IDE0LjIyODUgNDAuNDc1NSAxMi4zNzk1IDM5LjUwMjNDMTAuNTMwNCAzOC41MjkxIDkuMzYxNjcgMzYuNjIyNiA5LjMzMzMxIDM0LjUzMzNWMjhDOS4zMzMzMSAyOS4xOTQ2IDkuNzI1MzEgMjguODg2NiAxMC40NDQgMjkuODY2NkMxMS41NDQ0IDMxLjMyMzYgMTMuMjg2IDMyLjE1MjUgMTUuMTEwNiAzMi4wODhDMTguMDMyIDMyLjA4OCAxOC4zNDkzIDMwLjIyMTMgMjEuMjcwNiAzMC4yMjEzQzIyLjQ0ODIgMzAuMTM3NiAyMy42MjM0IDMwLjQxNDMgMjQuNjQgMzEuMDE0NkwzMC4yNCAzNC4wMDEzQzM0LjE2OTMgMzYuMzYyNiAzOS4xMDY2IDM1Ljk2MTMgNDMuMzYyNiAzMS43MDUzQzQ1LjQxNiAyOS43MDggNDYuNjY2NiAyOS4yMzIgNDYuNjY2NiAyNi4xMzMzWiIgZmlsbD0iI0RGNEQ2MCIvPgo8cGF0aCBkPSJNNDYuNjY2NiAyNi4xMzMzQzQ2LjY2NjYgMzQuOTUzMyAzNy4wNjI2IDM5Ljk4NCAzMC4yNjggMzUuODk2TDI0LjY2OCAzMi41MjY2QzIzLjY0NTkgMzEuOTIzMSAyMi40NjM4IDMxLjY0NjMgMjEuMjggMzEuNzMzM0MxOC4zNTg2IDMxLjczMzMgMTguMDQxMyAzMy42IDE1LjEyIDMzLjZDMTMuNjAyNyAzMy42NTA2IDEyLjEyOTkgMzMuMDgzIDExLjAzOSAzMi4wMjczQzkuOTQ4MDIgMzAuOTcxNSA5LjMzMjQ3IDI5LjUxODEgOS4zMzMzMSAyOFYyNy4wNjY2QzkuMzMzMzEgMTcuNzMzMyAyMS40NjY2IDEyLjEzMzMgMzAuOCAxMi4xMzMzQzQxLjA2NjYgMTIuMTMzMyA0Ni42NjY2IDE4LjQwNTMgNDYuNjY2NiAyNi4xMzMzWiIgZmlsbD0iI0ZCN0I3NiIvPgo8cGF0aCBkPSJNMjkuODY2NyAxNi44QzI5LjM2ODkgMTYuODAwNiAyOC45NTgyIDE2LjQxMDUgMjguOTMzNCAxNS45MTMzQzI4LjkyMDYgMTUuNjU3OCAyOS4wMTMyIDE1LjQwODMgMjkuMTg5NyAxNS4yMjNDMjkuMzY2MSAxNS4wMzc3IDI5LjYxMDkgMTQuOTMzIDI5Ljg2NjcgMTQuOTMzNEgzMC44QzMxLjMxNTUgMTQuOTMzNCAzMS43MzM0IDE1LjM1MTIgMzEuNzMzNCAxNS44NjY3QzMxLjczMzQgMTYuMzgyMSAzMS4zMTU1IDE2LjggMzAuOCAxNi44SDI5Ljg2NjdaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMTMuNjgyNyAyNS4yQzEzLjU1MDYgMjUuMTk5NCAxMy40MjAyIDI1LjE3MDggMTMuMyAyNS4xMTZDMTIuODMxNyAyNC45MDM5IDEyLjYyMzEgMjQuMzUzMSAxMi44MzMzIDIzLjg4NEMxNC45MDUzIDE5LjI4MjcgMjAuOTYyNyAxNi41MiAyNS45IDE1LjQ4NEMyNi40MTU1IDE1LjM3NTcgMjYuOTIxMSAxNS43MDU5IDI3LjAyOTMgMTYuMjIxM0MyNy4xMzc2IDE2LjczNjggMjYuODA3NSAxNy4yNDI0IDI2LjI5MiAxNy4zNTA3QzIwLjU5ODcgMTguNTU0NyAxNS45NjkzIDIxLjQzODcgMTQuNDk0NyAyNC43MDUzQzE0LjMzNDYgMjUuMDA2MSAxNC4wMjMzIDI1LjE5NTcgMTMuNjgyNyAyNS4yWiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTM2LjQgMjcuMDY2NkMzOC40NjE5IDI3LjA2NjYgNDAuMTMzNCAyNS4zOTUyIDQwLjEzMzQgMjMuMzMzM0M0MC4xMzM0IDIxLjI3MTQgMzguNDYxOSAxOS42IDM2LjQgMTkuNkMzNC4zMzgyIDE5LjYgMzIuNjY2NyAyMS4yNzE0IDMyLjY2NjcgMjMuMzMzM0MzMi42NjY3IDI1LjM5NTIgMzQuMzM4MiAyNy4wNjY2IDM2LjQgMjcuMDY2NloiIGZpbGw9IiNGNUVGQ0EiLz4KPHBhdGggZD0iTTI4IDU2QzEyLjUzNiA1NiAwIDQzLjQ2NCAwIDI4QzAgMTIuNTM2IDEyLjUzNiAwIDI4IDBDNDMuNDY0IDAgNTYgMTIuNTM2IDU2IDI4QzU2IDM1LjQyNjEgNTMuMDUgNDIuNTQ4IDQ3Ljc5OSA0Ny43OTlDNDIuNTQ4IDUzLjA1IDM1LjQyNjEgNTYgMjggNTZaTTI4IDEuODY2NjdDMTMuNTY3IDEuODY2NjcgMS44NjY2NyAxMy41NjcgMS44NjY2NyAyOEMxLjg2NjY3IDQyLjQzMyAxMy41NjcgNTQuMTMzMyAyOCA1NC4xMzMzQzQyLjQzMyA1NC4xMzMzIDU0LjEzMzMgNDIuNDMzIDU0LjEzMzMgMjhDNTQuMTMzMyAxMy41NjcgNDIuNDMzIDEuODY2NjcgMjggMS44NjY2N1oiIGZpbGw9IiNFNjRDM0MiLz4KPHBhdGggZD0iTTQ3LjE0MjYgNDguMDc2QzQ2Ljg5NDYgNDguMDc3NCA0Ni42NTYxIDQ3Ljk4IDQ2LjQ4IDQ3LjgwNTNMOC4yMTMzMiA5LjUzODY1QzcuOTczMjMgOS4zMDUyMyA3Ljg3NTkxIDguOTYxNDcgNy45NTgwMSA4LjYzNjg0QzguMDQwMTEgOC4zMTIyMiA4LjI4OTE2IDguMDU2MDYgOC42MTEzNSA3Ljk2NDg0QzguOTMzNTMgNy44NzM2MyA5LjI3OTkgNy45NjEyMyA5LjUxOTk4IDguMTk0NjVMNDcuNzg2NyA0Ni40NjEzQzQ3Ljk2MzMgNDYuNjM2NiA0OC4wNjI3IDQ2Ljg3NTEgNDguMDYyNyA0Ny4xMjRDNDguMDYyNyA0Ny4zNzI4IDQ3Ljk2MzMgNDcuNjExNCA0Ny43ODY3IDQ3Ljc4NjdDNDcuNjE4MSA0Ny45NjM3IDQ3LjM4NjkgNDguMDY3NiA0Ny4xNDI2IDQ4LjA3NloiIGZpbGw9IiNFNjRDM0MiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF8xMDdfMTM2OCI+CjxyZWN0IHdpZHRoPSI1NiIgaGVpZ2h0PSI1NiIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K",
    title: "Некачественное мясо",
    text:
      "Мясные полуфабрикаты, в которых содержится чрезмерно много натрия, вредных жиров, консервантов",
    labelMagazine: true,
    isNegative: true
  }
];

export default advantagesList;