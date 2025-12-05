import { getPageBySlug } from '@/lib/data'; 
import Image from "next/image"; 

export const dynamic = "auto";

export default async function B2BPage() {
  
  // 1. CHAMA A API DO WORDPRESS USANDO O SLUG CORRETO
  const pageData = await getPageBySlug('b2b'); 
  
  // VERIFICAÇÃO DE DADOS
  if (!pageData || !pageData.b2b) { // Verifica se o grupo 'b2b' existe
    return (
      <main className="container mx-auto p-8 text-center">
        <h1>Página B2B em Configuração</h1>
        <p>A página foi encontrada, mas os campos estão vazios ou não foram publicados corretamente.</p>
      </main>
    );
  }

  const data = pageData.b2b; // Move a variável para o grupo 'b2b'

  // 3. EXTRAI OS DADOS COM O CAMINHO CORRETO
  const tituloPrincipal = data.tituloDaSecaoPrincipal; 
  // Se a imagem for selecionada, o caminho é data.rotuloImagem.node.mediaItemUrl
  const imageUrl = data.rotuloImagem?.node?.mediaItemUrl; 

  return (
    <main className="container mx-auto p-8">
      
      {/* Título Principal */}
      {tituloPrincipal && (
        <h1 className="text-4xl font-bold mb-6 text-center">
          {tituloPrincipal}
        </h1>
      )}

      {/* Imagem Otimizada */}
      {imageUrl ? (
        <div className="relative w-full h-96 my-8">
            <Image
              src={imageUrl} 
              alt={tituloPrincipal || "Imagem B2B"}
              fill 
              style={{ objectFit: 'cover' }}
              className="rounded-lg shadow-lg"
            />
        </div>
      ) : (
        <p className="text-red-500 text-center">AVISO: Selecione uma imagem no campo 'rotuloImagem' do WordPress.</p>
      )}

    </main>
  );
}