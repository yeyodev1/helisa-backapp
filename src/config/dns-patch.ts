import dns from "dns";

// Fix Node.js DNS resolution issues (specifically on Windows / certain network setups)
// where it fails to resolve MongoDB SRV records (throwing querySrv ECONNREFUSED)
// by falling back to public DNS servers if the current resolver list is empty or resolves only to localhost.
try {
  const servers = dns.getServers();
  if (!servers || servers.length === 0 || (servers.length === 1 && servers[0] === "127.0.0.1")) {
    dns.setServers(["8.8.8.8", "1.1.1.1"]);
  }
} catch (error) {
  console.warn("Could not patch Node.js DNS servers:", error);
}
