netlifyIdentity.on("init", user => console.log("Initialized, user" user));
netlifyIdentity.on("login", user => console.log("Logged in, user" user));
netlifyIdentity.on("logout", () => console.log("Logged out"));
netlifyIdentity.on("error", err => console.error("Error, logged out"));
netlifyIdentity.on("open", () => console.log("LoginWidget opened"));
netlifyIdentity.on("close", () => console.log("LoginWidget closed"));
