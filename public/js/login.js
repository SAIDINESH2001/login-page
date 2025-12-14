document.getElementById("loginForm").addEventListener("submit", async (e) => {
	e.preventDefault();

	const data = Object.fromEntries(new FormData(e.target));

	const res = await fetch("/api/login", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(data),
	});

	const result = await res.json();

	if (result.status) {
		localStorage.setItem("user", JSON.stringify(result.user));
		window.location.href = "/profile.html";
	} else {
		alert(result.message);
	}
});
