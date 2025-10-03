import Content from "./components/layout/Content";


export default function NotFound() {
  return (
    <div className="w-full h-screen bg-white">
      <Content>
        <h1 className="text-3xl font-bold text-red-600">404</h1>
        <p className="mt-2 text-gray-700">Página não encontrada</p>
      </Content>
    </div>
  );
}