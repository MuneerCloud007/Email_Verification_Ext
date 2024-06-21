(() => {

















    const executionOfContent_script_Linkedin = () => {
        console.log("I am in execution content script")
        const divScript = document.createElement('div');

        divScript.innerHTML = ` <div data-v-70d82c64="" data-v-step="0" class="content-script-sticky">
            <img data-v-70d82c64="" alt="SalesQL"
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iNTgiIHZpZXdCb3g9IjAgMCAxMiA1OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTUuNzMwODQgNTEuNjgxNkM1LjU0MzUyIDUyLjE3MzcgNS4zNjM2MSA1Mi44MDQ1IDUuMTkxMTIgNTMuNTcyMUM1LjA1NzU5IDU0LjEzMjYgNC45MzcwMyA1NC41NzUzIDQuODMxMzEgNTQuOTAwMkM0LjcyNTYgNTUuMjI1MSA0LjU4MDkzIDU1LjQ5MyA0LjM5OTE3IDU1LjcwNThDNC4yMTc0MSA1NS45MTY3IDMuOTgxODYgNTYuMDIzMSAzLjY5MjUzIDU2LjAyMzFDMy4yNzg5MyA1Ni4wMjMxIDIuOTQ4OCA1NS44Mzg4IDIuNjk4NDEgNTUuNDcwMkMyLjQ0ODAzIDU1LjEwMTYgMi4zMjM3NyA1NC41MzczIDIuMzIzNzcgNTMuNzc5MkMyLjMyMzc3IDUzLjMxNzUgMi4zOTA1MyA1Mi44Mzg3IDIuNTI1OTMgNTIuMzQ2NkMyLjU5ODI2IDUyLjA4MDYgMi42ODkxNCA1MS44MjAzIDIuNzk4NTcgNTEuNTY1N0MyLjk1MDY1IDUxLjIxMDQgMi43OTMgNTAuNzk0MyAyLjQ0MjQ3IDUwLjY0OEwyLjIwNjkyIDUwLjU0OTJDMS44ODA0OSA1MC40MTQzIDEuNTAzOTkgNTAuNTU2OCAxLjM1Mzc2IDUwLjg4MTdDMS4yMTA5NSA1MS4xOTE0IDEuMDkyMjUgNTEuNTMxNSAwLjk5OTUxMyA1MS45MDJDMC44NDU1NzMgNTIuNTExOSAwLjc2OTUzMSA1My4xMzMyIDAuNzY5NTMxIDUzLjc2MjFDMC43Njk1MzEgNTQuNjY4NCAwLjkwNDkyNCA1NS40MzIyIDEuMTczODUgNTYuMDU3M0MxLjQ0Mjc5IDU2LjY4MjQgMS44MDYzMSA1Ny4xNDk4IDIuMjYyNTYgNTcuNDU5NUMyLjcxODgyIDU3Ljc2OTIgMy4yMjUxNSA1Ny45MjUgMy43ODM0MSA1Ny45MjVDNC40NDU1NCA1Ny45MjUgNC45NzIyNyA1Ny43NTAyIDUuMzYxNzYgNTcuNDAwNkM1Ljc1MTI0IDU3LjA1MSA2LjAzNjg2IDU2LjYzMyA2LjIxODYyIDU2LjE0NjZDNi40MDIyNCA1NS42NjAyIDYuNTg0IDU1LjAyMTggNi43NjU3NiA1NC4yMzUyQzYuOTAxMTUgNTMuNjc0NyA3LjAxOTg1IDUzLjIzMiA3LjEyNTU3IDUyLjkwNzFDNy4yMzEyOSA1Mi41ODIyIDcuMzc3ODEgNTIuMzE0MyA3LjU2NTEzIDUyLjEwMTVDNy43NTI0NiA1MS44OTA2IDcuOTg5ODYgNTEuNzg0MiA4LjI3OTE5IDUxLjc4NDJDOC42NzIzOSA1MS43ODQyIDguOTg5NTQgNTEuOTc0MiA5LjIzMDY1IDUyLjM1MjNDOS40NzE3NiA1Mi43MzA0IDkuNTkwNDYgNTMuMzA0MiA5LjU5MDQ2IDU0LjA3MThDOS41OTA0NiA1NC42OTEyIDkuNDg2NiA1NS4zMTA2IDkuMjgwNzMgNTUuOTI0M0M5LjE2NTczIDU2LjI2ODIgOS4wMzIyIDU2LjU4MTcgOC44NzgyNiA1Ni44NjQ4QzguNjkwOTMgNTcuMjEwNiA4Ljg0NDg3IDU3LjY0NzYgOS4xOTcyNiA1Ny44MDkxTDkuNDQwMjMgNTcuOTE5M0M5Ljc0MjU0IDU4LjA1OCAxMC4xMDQyIDU3Ljk1MzUgMTAuMjc0OCA1Ny42NjI4QzEwLjQ4NjMgNTcuMzAzNyAxMC42NjYyIDU2Ljg3ODEgMTAuODE0NiA1Ni4zODAzQzExLjAzNTMgNTUuNjM3NCAxMS4xNDY1IDU0Ljg2NiAxMS4xNDY1IDU0LjA2OTlDMTEuMTQ2NSA1My4xNjM2IDExLjAxMTIgNTIuMzk2IDEwLjc0MjIgNTEuNzY3MUMxMC40NzMzIDUxLjEzNjMgMTAuMTEzNSA1MC42NjcgOS42NjA5NCA1MC4zNTczQzkuMjEwMjUgNTAuMDQ3NiA4LjcwNTc3IDQ5Ljg5MTggOC4xNDc1MSA0OS44OTE4QzcuNDk0NjUgNDkuODkxOCA2Ljk3NTM0IDUwLjA2NjYgNi41OTE0MiA1MC40MTYyQzYuMjA1NjQgNTAuNzY5NiA1LjkxODE2IDUxLjE4OTUgNS43MzA4NCA1MS42ODE2WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTQuMDI5NTQgNDIuODE0MUMzLjQ4NjEyIDQzLjQyOTcgMy4yMTUzMyA0NC4zMTcgMy4yMTUzMyA0NS40Nzk4QzMuMjE1MzMgNDYuMTI5NiAzLjI5Njk0IDQ2Ljc0NTIgMy40NjAxNSA0Ny4zMjQ3QzMuNTU0NzQgNDcuNjU5MSAzLjY3MTU5IDQ3Ljk2MzEgMy44MTI1NCA0OC4yNDI0QzMuOTgxMzIgNDguNTc0OSA0LjM5MzA2IDQ4LjY5MDggNC43MTM5MyA0OC41MTQxTDQuODQzNzUgNDguNDQxOUM1LjE2NjQ3IDQ4LjI2MzMgNS4yNzk2MSA0Ny44NTg2IDUuMTE2MzkgNDcuNTIyM0M1LjAzODUgNDcuMzYyNyA0Ljk3MTczIDQ3LjE5MTcgNC45MTQyMyA0Ny4wMDkzQzQuNzgwNjkgNDYuNTgxOCA0LjcxMjA3IDQ2LjE0NDggNC43MTIwNyA0NS43MDIxQzQuNzEyMDcgNDUuMDUyMyA0Ljg1Njc0IDQ0LjU2MjEgNS4xNDQyMSA0NC4yMzM0QzUuNDMxNjkgNDMuOTAyOCA1Ljg0NTI5IDQzLjczOTQgNi4zODMxNSA0My43Mzk0TDYuNDk4MTQgNDMuNzM5NEw2LjQ5ODE0IDQ1Ljc3NjJDNi40OTgxNCA0Ni45MDg2IDYuNzA3NzIgNDcuNzM3IDcuMTI1MDMgNDguMjYzM0M3LjU0MjM0IDQ4Ljc4OTYgOC4wOTg3NCA0OS4wNTM3IDguNzkwNTUgNDkuMDUzN0M5LjIzMTk2IDQ5LjA1MzcgOS42Mjg4NyA0OC45MzQgOS45Nzk0IDQ4LjY5MjdDMTAuMzI5OSA0OC40NTE0IDEwLjYwNDQgNDguMTA5NCAxMC44MDEgNDcuNjY2N0MxMC45OTc2IDQ3LjIyNCAxMS4wOTU5IDQ2LjcwNzIgMTEuMDk1OSA0Ni4xMTYzQzExLjA5NTkgNDUuNTI1NCAxMS4wMDY5IDQ1LjAyMTkgMTAuODI4OSA0NC42MDJDMTAuNjUwOCA0NC4xODQgMTAuMzk0OSA0My44NjEgMTAuMDU3MyA0My42MzQ5TDEwLjMyNDQgNDMuNjM0OUMxMC42OTM1IDQzLjYzNDkgMTAuOTkzOSA0My4zMjkgMTAuOTkzOSA0Mi45NDlMMTAuOTkzOSA0Mi41NzY2QzEwLjk5MzkgNDIuMTk4NiAxMC42OTUzIDQxLjg5MDggMTAuMzI0NCA0MS44OTA4TDYuNDg3MDEgNDEuODkwOEM1LjM5Mjc0IDQxLjg5MDggNC41NzI5NyA0Mi4xOTg2IDQuMDI5NTQgNDIuODE0MVpNOC4xNTA2OCA0My43Mzc1QzguNjg4NTQgNDMuNzM3NSA5LjE5NjcyIDQ0LjAxNDkgOS40NzMwNyA0NC40ODhDOS40NzQ5MyA0NC40OTE4IDkuNDc2NzggNDQuNDk1NiA5LjQ3ODY0IDQ0LjQ5OTRDOS42ODQ1MSA0NC44NTg1IDkuNzg4MzcgNDUuMjY4OSA5Ljc4ODM3IDQ1LjczMjVDOS43ODgzNyA0Ni4yMDU2IDkuNjkxOTMgNDYuNTc0MiA5LjUwMDg5IDQ2Ljg0MDJDOS4zMDgwMSA0Ny4xMDYyIDkuMDUwMiA0Ny4yMzkyIDguNzIxOTIgNDcuMjM5MkM4LjAzOTM5IDQ3LjIzOTIgNy42OTgxMyA0Ni43MDcyIDcuNjk4MTMgNDUuNjQ1MUw3LjY5ODEzIDQzLjc0MTNMOC4xNTA2OCA0My43NDEzTDguMTUwNjggNDMuNzM3NVoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xMC4yMzc1IDM2LjU2NTRDOS44Nzc2NSAzNi41ODgyIDkuNjE0MjggMzYuODk5OCA5LjYxNjEzIDM3LjI3MDNDOS42MTYxMyAzNy4yNzIyIDkuNjE2MTMgMzcuMjc2IDkuNjE2MTMgMzcuMjc3OUM5LjYxNjEzIDM4LjAxNyA5LjIzMjIxIDM4LjM4NTYgOC40NjI1MSAzOC4zODU2TDAuOTczMjU2IDM4LjM4NTZDMC42MDQxNzIgMzguMzg1NiAwLjMwMzcxMSAzOC42OTE1IDAuMzAzNzExIDM5LjA3MTVMMC4zMDM3MTEgMzkuNTQ2NUMwLjMwMzcxMSAzOS45MjQ2IDAuNjAyMzE3IDQwLjIzMjQgMC45NzMyNTYgNDAuMjMyNEw4LjU5MjM0IDQwLjIzMjRDOS4zODk4NiA0MC4yMzI0IDEwLjAwNzUgNDAuMDA0NCAxMC40NDUyIDM5LjU0NjVDMTAuODgyOSAzOS4wODg2IDExLjEwMTcgMzguNDUyMSAxMS4xMDE3IDM3LjYzNTFDMTEuMTAxNyAzNy40Njc5IDExLjA5MDYgMzcuMzA2NCAxMS4wNjg0IDM3LjE0ODdDMTEuMDE4MyAzNi43OTUzIDEwLjcxMjMgMzYuNTQwNyAxMC4zNjU0IDM2LjU2MTZMMTAuMjM3NSAzNi41NjU0WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTMuNzE0ODMgMzAuMTk2NEMzLjM4Mjg0IDMwLjgwMjUgMy4yMTc3NyAzMS40ODg0IDMuMjE3NzcgMzIuMjU2QzMuMjE3NzcgMzMuMDMzMSAzLjM4NjU1IDMzLjczMjMgMy43MjIyNSAzNC4zNTE3QzQuMDU3OTUgMzQuOTcxMSA0LjUyNzE5IDM1LjQ1NzUgNS4xMjgxMSAzNS44MDUyQzUuNzI5MDMgMzYuMTU0OCA2LjQwNDE0IDM2LjMyOTYgNy4xNTM0NCAzNi4zMjk2QzcuOTEyMDEgMzYuMzI5NiA4LjU5MjY4IDM2LjE1MSA5LjE5MzYgMzUuNzlDOS43OTQ1MiAzNS40MzA5IDEwLjI2MTkgMzQuOTIxNyAxMC41OTk1IDM0LjI2MjRDMTAuOTM1MiAzMy42MDMxIDExLjEwMzkgMzIuODM5MyAxMS4xMDM5IDMxLjk3NDhDMTEuMTAzOSAzMS4yOTY1IDEwLjk5ODIgMzAuNjg0NyAxMC43ODY4IDMwLjE0MzJDMTAuNjY5OSAyOS44NDQ5IDEwLjUyMzQgMjkuNTc1MSAxMC4zNDcyIDI5LjMzMzhDMTAuMTEzNSAyOS4wMTQ2IDkuNjY0NjkgMjguOTY1MiA5LjM2OTc5IDI5LjIyNzRMOS4yMzYyNiAyOS4zNDUyQzguOTg0MDIgMjkuNTcxMyA4LjkyMjgxIDI5Ljk1NyA5LjEwODI4IDMwLjI0MkM5LjQxOTg3IDMwLjcxODkgOS41NzU2NyAzMS4yODEzIDkuNTc1NjcgMzEuOTI5MkM5LjU3NTY3IDMyLjYwNzUgOS40MTA2IDMzLjE3NzUgOS4wNzg2MSAzMy42MzU0QzguNzQ2NjIgMzQuMDkzMyA4LjI5Nzc4IDM0LjM3NjQgNy43MzAyNSAzNC40ODQ3TDcuNzMwMjQgMjguODE3QzcuNzMwMjQgMjguNTE2OCA3LjQ5NDcgMjguMjY5OCA3LjIwMTY2IDI4LjI2OThDNy4xOTk4IDI4LjI2OTggNy4xOTk4IDI4LjI2OTggNy4xOTc5NSAyOC4yNjk4QzYuNDA5NyAyOC4yNjk4IDUuNzE2MDUgMjguNDM4OSA1LjExNTEzIDI4Ljc3OUM0LjUxMjM1IDI5LjExOTEgNC4wNDQ5NyAyOS41OTAzIDMuNzE0ODMgMzAuMTk2NFpNNi41MzIxMSAzNC40OTk5QzUuOTY0NTggMzQuNDEwNiA1LjUxMjAzIDM0LjE2MzYgNS4xNzA3NyAzMy43NTUxQzQuODI5NSAzMy4zNDY2IDQuNjU4ODcgMzIuODQ2OSA0LjY1ODg3IDMyLjI1NkM0LjY1ODg3IDMxLjY1NTYgNC44MzEzNiAzMS4xNTQgNS4xNzgxOSAzMC43NDkzQzUuNTI1MDEgMzAuMzQ2NSA1Ljk3NTcgMzAuMTA1MiA2LjUzMjExIDMwLjAyNTRMNi41MzIxMSAzNC40OTk5VjM0LjQ5OTlaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNNi44MTk1OSAyMi4yODgyQzYuNjk1MzMgMjIuNjkxIDYuNTg0MDQgMjMuMjA3OCA2LjQ4NzYgMjMuODM4NkM2LjM4MTg4IDI0LjQ2OTQgNi4yNjg3NSAyNC45MzMgNi4xNDgxOSAyNS4yMzMyQzYuMDI3NjQgMjUuNTMzNCA1LjgyMzYyIDI1LjY4MzUgNS41MzYxNCAyNS42ODM1QzUuMjc2NDggMjUuNjgzNSA1LjA2NjkgMjUuNTQyOSA0LjkwOTI2IDI1LjI2MzZDNC43NTE2MSAyNC45ODI0IDQuNjcxODUgMjQuNTcyIDQuNjcxODUgMjQuMDMwNUM0LjY3MTg1IDIzLjQyMjUgNC43NzM4NiAyMi44NjAxIDQuOTc2MDIgMjIuMzQxNEM1LjEwNTg1IDIyLjAwODkgNC45NzQxNyAyMS42Mjg5IDQuNjYwNzMgMjEuNDY3NEw0LjUwMTIyIDIxLjM4MzhDNC4xMzU4NSAyMS4xOTM4IDMuNjk0NDMgMjEuMzg1NyAzLjU2Mjc1IDIxLjc4MjhDMy41MDE1NCAyMS45NjkgMy40NDU5IDIyLjE3MjMgMy4zOTc2OCAyMi4zOTA4QzMuMjc3MTIgMjIuOTMyMyAzLjIxNzc3IDIzLjQ3MzggMy4yMTc3NyAyNC4wMTUzQzMuMjE3NzcgMjUuMDc3NCAzLjQzNjYzIDI1LjkyMjkgMy44NzQzNCAyNi41NDhDNC4zMTIwNCAyNy4xNzMxIDQuODk0NDIgMjcuNDg0NyA1LjYyNTE3IDI3LjQ4NDdDNi4xODM0MyAyNy40ODQ3IDYuNjE3NDMgMjcuMzM0NiA2LjkyOTAyIDI3LjAzNDRDNy4yNDA2MSAyNi43MzQyIDcuNDU5NDYgMjYuMzgwOCA3LjU4NTU4IDI1Ljk3MjNDNy43MDk4NCAyNS41NjM4IDcuODIxMTMgMjUuMDM1NiA3LjkxNzU3IDI0LjM4NThDOC4wMTQwMSAyMy43NjY0IDguMTE0MTcgMjMuMzE2MSA4LjIxOTg4IDIzLjAzNDlDOC4zMjU2IDIyLjc1MzcgOC41MTI5MyAyMi42MTUgOC43ODE4NiAyMi42MTVDOS4zNDkzOSAyMi42MTUgOS42MzEzMSAyMy4xNjYgOS42MzEzMSAyNC4yNjhDOS42MzEzMSAyNC43NTA2IDkuNTYwODMgMjUuMjQwOCA5LjQyMTczIDI1LjczNjdDOS4zNTEyNSAyNS45OTEzIDkuMjY3NzkgMjYuMjI2OSA5LjE3MzIgMjYuNDQzNUM5LjAyNjY4IDI2Ljc3NiA5LjE2MzkzIDI3LjE2NzQgOS40ODEwOCAyNy4zMzI3TDkuNjYwOTggMjcuNDI1OEM5Ljk5ODU0IDI3LjYwMDYgMTAuNDE3NyAyNy40NTYyIDEwLjU2OTggMjcuMTAwOUMxMC42NzU1IDI2Ljg1MzkgMTAuNzcwMSAyNi41NzI3IDEwLjg1MzYgMjYuMjYxMUMxMS4wMTY4IDI1LjY1MTIgMTEuMDk4NCAyNS4wMjYxIDExLjA5ODQgMjQuMzg1OEMxMS4wOTg0IDIzLjI4MzggMTAuODgxNCAyMi40MTE3IDEwLjQ0OTIgMjEuNzczM0MxMC4wMTcxIDIxLjEzMyA5LjQ0MDI3IDIwLjgxMzggOC43MTg4IDIwLjgxMzhDOC4xNzE2NiAyMC44MTM4IDcuNzQ4NzkgMjAuOTYwMSA3LjQ1MDE5IDIxLjI0ODlDNy4xNTcxNSAyMS41Mzc3IDYuOTQ1NzEgMjEuODgzNSA2LjgxOTU5IDIyLjI4ODJaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNNS45NTUwNiA4Ljg0ODQ4QzQuOTY0NjUgOC44NDg0OCA0LjA3NjI2IDkuMDg5NzggMy4yODgwMSA5LjU3MjM4QzIuNDk5NzYgMTAuMDU1IDEuODgyMTUgMTAuNzIgMS40MzUxNyAxMS41NjU1QzAuOTg4MTg4IDEyLjQxMjkgMC43NjU2MjUgMTMuMzYyOSAwLjc2NTYyNSAxNC40MTU1QzAuNzY1NjI1IDE1LjQ2OCAwLjk4ODE4OCAxNi40MTggMS40MzUxNyAxNy4yNjU0QzEuODgyMTUgMTguMTEyOCAyLjUwMTYyIDE4Ljc3NTkgMy4yOTM1NyAxOS4yNTg1QzQuMDg1NTMgMTkuNzQxMSA0Ljk3MjA3IDE5Ljk4MjQgNS45NTMyMSAxOS45ODI0QzYuODM3OSAxOS45ODI0IDcuNjQ0NjkgMTkuNzg4NiA4LjM3MzU4IDE5LjM5OTFDOS4xMDQzMyAxOS4wMDk2IDkuNjk3ODQgMTguNDYyNCAxMC4xNzQ1IDE3Ljc2N0MxMS4zNDQ4IDE2LjA2MDggMTEuNDY1NCAxMy41OTY2IDEwLjU0MTcgMTEuNzAyM0wxMS43NjU4IDEwLjQ0ODNDMTIuMDE4MSAxMC4xODk5IDEyLjAxODEgOS43NzM3NyAxMS43NjU4IDkuNTE1MzhMMTEuNTAwNiA5LjI0MzY4QzExLjI0ODQgOC45ODUyOCAxMC44NDIyIDguOTg1MjggMTAuNTg5OSA5LjI0MzY4TDkuNTUzMTcgMTAuMzA1OEM5LjIwNjM0IDkuOTU4MDcgOC44MTUgOS42NjczOCA4LjM3MzU4IDkuNDMxNzhDNy42NDY1NCA5LjA0MjI4IDYuODM5NzUgOC44NDg0OCA1Ljk1NTA2IDguODQ4NDhaTTcuNDI3NjkgMTIuNDg1MUM3LjE3NTQ1IDEyLjc0MzUgNy4xNzU0NSAxMy4xNTk2IDcuNDI3NjkgMTMuNDE4TDcuNjkyOTEgMTMuNjg5N0M3Ljk0NTE1IDEzLjk0ODEgOC4zNTEzMyAxMy45NDgxIDguNjAzNTcgMTMuNjg5N0w5LjI2MTk4IDEzLjAxNTJDOS4zMjMxOSAxMy4xNzg2IDkuMzc1MTIgMTMuMzQ5NiA5LjQxNDA3IDEzLjUyODJDOS40MTQwNyAxMy41MjgyIDkuNTAxMjQgMTMuODg1NCA5LjUwMTI0IDE0LjQ1MzVDOS41MDEyNCAxNC43ODc5IDkuMzk5MjMgMTUuMzE0MSA5LjM5OTIzIDE1LjMxNDFDOS4yMTc0NyAxNi4xMzExIDguODE1IDE2Ljc5MDQgOC4xOTU1MyAxNy4yOTJDNy41NzYwNiAxNy43OTM2IDYuODI4NjIgMTguMDQ0NCA1Ljk1NTA2IDE4LjA0NDRDNS4yODE4MSAxOC4wNDQ0IDQuNjc1MzIgMTcuODg2NyA0LjEzMTkgMTcuNTcxM0MzLjU4ODQ3IDE3LjI1NTkgMy4xNjU2IDE2LjgyMjcgMi44NjMyOCAxNi4yNzE3QzIuNTYwOTcgMTUuNzIwNyAyLjQwODg4IDE1LjEwMTMgMi40MDg4OCAxNC40MTE3QzIuNDA4ODggMTMuNzIyIDIuNTYwOTcgMTMuMTAyNiAyLjg2MzI4IDEyLjU1MTZDMy4xNjU2IDEyLjAwMDYgMy41ODg0NyAxMS41Njc0IDQuMTMxOSAxMS4yNTJDNC42NzUzMiAxMC45MzY2IDUuMjgxODEgMTAuNzc4OSA1Ljk1NTA2IDEwLjc3ODlDNi44Mjg2MiAxMC43Nzg5IDcuNTc5NzcgMTEuMDI5NyA4LjIwMjk1IDExLjUzMTNDOC4yMzA3NyAxMS41NTQxIDguMjU2NzQgMTEuNTc4OCA4LjI4NDU2IDExLjYwMzVMNy40Mjc2OSAxMi40ODUxWiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTkuNDEzOTMgMC42ODYwODNMOS40MTM5MyA1LjQwMzc2TDEuNTc5NyA1LjQwMzc2QzEuMjEwNjIgNS40MDM3NiAwLjkxMDE1NiA1LjcwOTY2IDAuOTEwMTU2IDYuMDg5NjVMMC45MTAxNTYgNi42Mzg3NUMwLjkxMDE1NiA3LjAxNjg1IDEuMjA4NzYgNy4zMjQ2NSAxLjU3OTcgNy4zMjQ2NUwxMC4zMzAyIDcuMzI0NjVDMTAuNjk5MiA3LjMyNDY1IDEwLjk5OTcgNy4wMTg3NSAxMC45OTk3IDYuNjM4NzVMMTAuOTk5NyAwLjY4NjA4M0MxMC45OTk3IDAuMzA3OTg1IDEwLjcwMTEgMC4wMDAxODkzMzkgMTAuMzMwMiAwLjAwMDE4OTM1NUwxMC4wODE2IDAuMDAwMTg5MzY2QzkuNzEyNTQgMC4wMDAxODkzODIgOS40MTM5MyAwLjMwNjA4NSA5LjQxMzkzIDAuNjg2MDgzWiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg=="
                class="_2d3UR63rqsS_YuSaSBY8"> <img data-v-70d82c64="" alt="SalesQL"
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeT0iMjMuOTk5OCIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiByeD0iMTIiIHRyYW5zZm9ybT0icm90YXRlKC05MCAwIDIzLjk5OTgpIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMTYuMTc2NCAxOC42NjEyQzE0LjE3MzQgMjAuNTUwNSAxMS4wMjA2IDIwLjQwNDcgOS4wODQzMiAxOC40NDU2TDQuNTgzNjcgMTMuODcyM0wzLjMyNTUgMTUuMTQ2N0MzLjIwNDQ4IDE1LjI2OTMgMyAxNS4xODI2IDMgMTUuMDExNEwzIDExLjAxNzJDMyAxMC45MTE1IDMuMDg1NTUgMTAuODI0OSAzLjE4OTg3IDEwLjgyNDlMNy4xMzM0MSAxMC44MjQ5QzcuMzAyNDIgMTAuODI0OSA3LjM4Nzk3IDExLjAzMiA3LjI2OTA0IDExLjE1NDZMNi4wMDg3NyAxMi40MzFMMTAuNTk5MSAxNy4wODY3QzExLjc5NDcgMTguMjk3NyAxMy43NDM1IDE4LjI4NSAxNC45MjI0IDE3LjA0NjZDMTYuMDU3NSAxNS44NTI1IDE1Ljk2OTkgMTMuODQ5MSAxNC44MTE4IDEyLjY3ODNMMTIuMDI2MyA5Ljg1NDgzQzExLjYxOTQgOS40NDI3MyAxMS42MzIgOC43NjY0NiAxMi4wNjYgOC4zNzEyNkMxMi40NzI4IDguMDAxNDIgMTMuMTA3MSA4LjA1ODQ4IDEzLjQ5NTIgOC40NDk0NUwxNi4zMSAxMS4zMDA0QzE4LjMyMzUgMTMuMzQxOSAxOC4yNzk2IDE2LjY3NjggMTYuMTc2NCAxOC42NjEyWiIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyXzYzMTlfNDE0NjkpIi8+CjxwYXRoIGQ9Ik05LjMwMzY0IDUuMzg3MjdDMTEuMzA2NyAzLjQ5NzkyIDE0LjQ1OTUgMy42NDM3NCAxNi4zOTU3IDUuNjAyODNMMjAuNzA0NCA5Ljk2OTAzQzIxLjA5ODggMTAuMzY4NSAyMS4wOTg4IDExLjAxNTEgMjAuNzA0NCAxMS40MTQ2QzIwLjMxMDEgMTEuODE0IDE5LjY3MTYgMTEuODE0IDE5LjI3NzIgMTEuNDE0NkwxNC44ODA5IDYuOTYxNzJDMTMuNjg1MyA1Ljc1MDc2IDExLjczNjUgNS43NjM0NCAxMC41NTc2IDcuMDAxODdDOS40MjI1NyA4LjE5NTkyIDkuNTEwMiAxMC4xOTk0IDEwLjY2ODIgMTEuMzcwMkwxMy40NTM3IDE0LjE5MzZDMTMuODYwNiAxNC42MDU3IDEzLjg0ODEgMTUuMjgyIDEzLjQxNDEgMTUuNjc3MkMxMy4wMDcyIDE2LjA0NyAxMi4zNzI5IDE1Ljk5IDExLjk4NDggMTUuNTk5TDkuMTcwMSAxMi43NDgxQzcuMTU2NiAxMC43MDY2IDcuMjAwNDIgNy4zNzE3MSA5LjMwMzY0IDUuMzg3MjdaIiBmaWxsPSJ1cmwoI3BhaW50MV9saW5lYXJfNjMxOV80MTQ2OSkiLz4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhcl82MzE5XzQxNDY5IiB4MT0iNS4xNzExMiIgeTE9IjguNjU1MjMiIHgyPSIxNS4yMjcxIiB5Mj0iMTguNTgzNiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjRkMzRkMwIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0ZGQjcwMCIvPgo8L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MV9saW5lYXJfNjMxOV80MTQ2OSIgeDE9IjE3LjkxMzQiIHkxPSIxNC4zNzE3IiB4Mj0iOS4yNjcyNCIgeTI9IjUuODM1MjQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iIzZBNjlGRiIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMwMEQ3REIiLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8L3N2Zz4K"
                class="_2YxiimXyUkJMhe9rNeSc">
            </div>`
        divScript.className = "content_modal_script"
        scriptBefore = document.body.children;

        scriptBeforeAll = scriptBefore[document.body.children.length - 3]
        document.body.insertBefore(divScript, scriptBeforeAll)
        console.log("Added to dom");

        console.log(location.href);
        let lastScrollTop = 0;



        divScript.addEventListener("click", async (e) => {
            document.getElementsByClassName("wrapper_modal_webscrap").length > 0 && Array.from(document.getElementsByClassName("wrapper_modal_webscrap"))?.map((vl) => vl?.remove())
            const webscrap_modal = document.createElement("div");
            webscrap_modal.className = "wrapper_modal_webscrap";
            const loading = Loader();
            webscrap_modal.appendChild(loading);
            document.body.insertBefore(webscrap_modal, document.getElementsByClassName("content_modal_script")[0]);






            const fullData = await webScrapFun(e);
            document.getElementsByClassName("Loading")[0]?.remove();
            console.log(fullData);


            fullData && webscrap_modal.appendChild(fullData);




            document.body.insertBefore(webscrap_modal, document.getElementsByClassName("content_modal_script")[0]);

            //This the scrolling logic which work in bases of it 
            window?.removeEventListener('popstate', checkUrlChange)
            window.addEventListener('popstate', checkUrlChange);



            checkUrlChange();

            console.log("Setting up scroll event listener");
            await delay(2000);

            // Example: Check if the scrollable div is still present
            let divElement = document.getElementsByClassName("p4 _vertical-scroll-results_1igybl")[0];
            console.log("Scrollable div:", divElement);

            if (divElement) {
                console.log("Element found:", divElement);

                //Remove Listner
                divElement?.removeEventListener("scroll", debouncedHandleScroll)

                // Attach debounced scroll event listener
                divElement.addEventListener("scroll", debouncedHandleScroll);
            }

        })


        function handleUrlChange(newUrl) {
            console.log('URL changed to:', newUrl);
            lastScrollTop = 0;
            // Your logic here
        }

        // Function to check and act on URL changes
        function checkUrlChange() {
            const currentUrl = window.location.href;
            if (currentUrl !== lastUrl) {
                lastUrl = currentUrl;
                handleUrlChange(currentUrl);
            }
        }

        // Store the last URL
        let lastUrl = window.location.href;

        // Create a MutationObserver to detect changes in the document
        const observer = new MutationObserver(checkUrlChange);

        // Start observing changes in the document
        observer.observe(document, { childList: true, subtree: true });

        // Also check URL change on popstate events (back/forward navigation)

        console.log("I am in div element!!!");



        // Define the debounce delay (e.g., 1000 milliseconds)
        const debounceDelay = 1000;

        // Variable to store the last scroll position

        // Function to handle scroll events asynchronously
        async function handleScroll(e) {
            let currentScrollTop = document.getElementsByClassName("p4 _vertical-scroll-results_1igybl")[0].scrollTop
            console.log(currentScrollTop);
            console.log(lastScrollTop);

            if (currentScrollTop > lastScrollTop) {
                // Scrolling downwards
                console.log("Scrolling downwards");

                // Example: Get reference to scrollable div
                let divElement = document.getElementsByClassName("p4 _vertical-scroll-results_1igybl")[0];
                console.log("Scrollable div:", divElement);
                const content_script = document.getElementsByClassName("content_modal_script")[0];
                console.log(content_script);
                console.log(content_script.style.display);
                console.log(content_script.style.display == "none");

                if (divElement && content_script.style.display == "none") {
                    document.getElementsByClassName("wrapper_modal_webscrap").length > 0 && Array.from(document.getElementsByClassName("wrapper_modal_webscrap"))?.map((vl) => vl?.remove())
                    const webscrap_modal = document.createElement("div");
                    webscrap_modal.className = "wrapper_modal_webscrap";
                    const loading = Loader();
                    webscrap_modal.appendChild(loading);
                    document.body.insertBefore(webscrap_modal, document.getElementsByClassName("content_modal_script")[0]);
                    const fullData = await webScrapFun();
                    document.getElementsByClassName("Loading")[0]?.remove();

                    webscrap_modal.appendChild(fullData);

                    document.body.insertBefore(webscrap_modal, document.getElementsByClassName("content_modal_script")[0]);


                }
            }

            // Update last scroll position
            lastScrollTop = currentScrollTop;
        }

        // Debounced scroll event handler
        const debouncedHandleScroll = debounce(handleScroll, debounceDelay);

        // Delay execution to ensure elements are loaded





    }

    setTimeout(() => {
        console.log("Content-script modeling");

        // Check if not on the login page of LinkedIn Sales Navigator
        if (location.href !== "https://www.linkedin.com/sales/login") {
            // Function to execute LinkedIn-specific content script
            executionOfContent_script_Linkedin();
            console.log("Execution script is execute this is new url");

        }
    }, 4000); // Adjust delay time (4000 milliseconds) as needed





})();

