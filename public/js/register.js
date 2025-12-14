document
	.getElementById("registerForm")
	.addEventListener("submit", async (e) => {
		e.preventDefault();

		const data = Object.fromEntries(new FormData(e.target));

		if (data.password !== data.confPassword) {
			alert("Passwords do not match");
			return;
		}

		const res = await fetch("/api/register", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(data),
		});

		const result = await res.json();
		alert(result.message);

		if (result.status) {
			window.location.href = "/login.html";
		}
	});
