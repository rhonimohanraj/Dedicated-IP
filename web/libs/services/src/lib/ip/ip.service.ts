async function DomainHasARecord(domain: string) {
  domain = domain.trim()
  const response = await fetch(`https://dns.google/resolve?name=${domain}.dedicated-ip.cloud&type=A`);
  const data = await response.json();
  return (data.Answer?.length ?? 0) > 0;
}

export { DomainHasARecord };
