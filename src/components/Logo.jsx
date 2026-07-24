export default function Logo({ className = "h-10" }) {
  return (
    <div className="flex items-center gap-2.5 select-none">
      <img src="/logo.png" alt="Morgan Bailey Limited" className={`${className} w-auto object-contain`} />
    </div>
  );
}
