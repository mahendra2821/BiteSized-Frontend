import ClientCard from './ClientCard';

export default function ClientList({ clients }) {
  return (
    <div className="space-y-4">
      {clients.map(client => (
        <ClientCard key={client.email} client={client} />
      ))}
    </div>
  );
}
