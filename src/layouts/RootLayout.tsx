export default function RootLayout() {

  return (
    <div className="flex min-h-screen flex-col bg-white text-black">
      <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
