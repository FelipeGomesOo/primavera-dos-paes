import { getPageBySlug } from '@/lib/data'; 
import Image from "next/image"; 
import Lojas from "../(home)/Produtos"; // <--- ADICIONE ESTA LINHA
import Produtos from '../(home)/Produtos';


export const dynamic = "auto";

export default async function B2BPage() {
  
  const pageData = await getPageBySlug('b2b'); 
  
if (!pageData || !pageData.b2b) { 
    return (
      <main className="container mx-auto p-8 text-center">
        <h1>Página B2B em Configuração</h1>
        {/* CORREÇÃO DEFINITIVA: Usando &quot; para fazer as aspas sem erro */}
        <p>Dados não encontrados. Verifique se o slug da página no WP é &quot;b2b&quot;.</p>
      </main>
    );
  }

  const data = pageData.b2b;
  
  // --- EXTRAÇÃO DOS DADOS BÁSICOS ---
  const tituloPrincipal = data.tituloDaSecaoPrincipal; 
  const rotuloImagemUrl = data.rotuloImagem?.node?.mediaItemUrl; 
  
  const beneficiosTitulo = data.beneficiosTitulo;
  const listaBeneficios = data.listaBeneficios; 
  
  const servicosTitulo = data.servicosTitulo;
  const servicosDescricao = data.servicosDescricao;
  const imagemServicosUrl = data.imagemServicos?.node?.mediaItemUrl;
  
  const ctaMeioTitulo = data.ctaMeioTitulo;
  const ctaMeioLink = data.ctaMeioLink;

  // --- LÓGICA DO GRID (3 BLOCOS - FALSO REPETIDOR) ---
  const gridData = data.griditem || {}; // Previne erro se o grupo não existir
  
  const gridTriplo = [
    {
      titulo: gridData.titulo1,
      // Deixei preparado caso você crie 'texto1' e 'icone1' depois
      texto: gridData.texto1, 
      icone: gridData.icone1?.node?.mediaItemUrl
    },
    {
      titulo: gridData.titulo2,
      texto: gridData.texto2,
      icone: gridData.icone2?.node?.mediaItemUrl
    },
    {
      titulo: gridData.titulo3,
      texto: gridData.texto3,
      icone: gridData.icone3?.node?.mediaItemUrl
    }
  ];

  return (
    <main className="container mx-auto p-8">
      
      {/* 1. SEÇÃO PRINCIPAL */}
      {tituloPrincipal && (
        <h1 className="text-4xl font-bold mb-6 text-center">{tituloPrincipal}</h1>
      )}

      {rotuloImagemUrl && (
        <div className="relative w-full h-96 my-8 bg-gray-50 rounded-lg">
            <Image
              src={rotuloImagemUrl} 
              alt={tituloPrincipal || "Imagem B2B"}
              fill 
              style={{ objectFit: 'contain' }}
              className="rounded-lg shadow-lg"
            />
        </div>
      )}
      
      {/* 2. SEÇÃO DE BENEFÍCIOS (Vídeo) */}
      <section className="mt-16 mb-20 text-center">
        {beneficiosTitulo && <h2 className="text-3xl font-semibold mb-8">{beneficiosTitulo}</h2>}
        
        {listaBeneficios && (
          <div 
            className="w-full flex justify-center [&>iframe]:w-full [&>iframe]:max-w-5xl [&>iframe]:aspect-video my-10 shadow-xl rounded-xl overflow-hidden mx-auto"
            dangerouslySetInnerHTML={{ __html: listaBeneficios }}
          />
        )}
      </section>

     

      {/* 3. CTA INTERMEDIÁRIO */}
      {ctaMeioTitulo && ctaMeioLink && (
        <div className="bg-yellow-50 p-10 my-16 text-center rounded-lg shadow-inner">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">{ctaMeioTitulo}</h2>
          <a 
            href={ctaMeioLink} 
            className="inline-flex items-center justify-center
              bg-red-600 text-white 
              text-lg font-bold uppercase tracking-wide
              py-4 px-8 
              rounded-full 
              shadow-lg hover:shadow-xl 
              hover:bg-red-700 hover:-translate-y-1 
              transition-all duration-300 inline-block bg-red-600 text-white font-bold py-3 px-6 rounded-full hover:bg-red-700 transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            Quero o melhor Coffee Break do Rio
          </a>
        </div>
      )}

       {/* 4. SEÇÃO DE SERVIÇOS */}
      {servicosTitulo && (
        <section className="mt-16 mb-20">
            <h2 className="text-3xl font-semibold mb-8 text-center">{servicosTitulo}</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                {imagemServicosUrl && (
                    <div className="relative h-64 lg:h-96 rounded-lg overflow-hidden shadow-lg">
                        <Image src={imagemServicosUrl} alt={servicosTitulo} fill style={{ objectFit: 'cover' }} />
                    </div>
                )}
                {servicosDescricao && (
                    <div 
                        className="prose max-w-none text-gray-700"
                        dangerouslySetInnerHTML={{ __html: servicosDescricao }} 
                    />
                )}
            </div>
        </section>
      )}


       {/* 5. NOVA SEÇÃO DE GRID (3 BLOCOS) */}
      {/* Verifica se pelo menos o primeiro título existe para exibir a seção */}
      {gridData.titulo1 && (
        <section className="my-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {gridTriplo.map((item, index) => (
              // Só renderiza o card se tiver título
              item.titulo && (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                  
                  {/* Ícone (aparecerá só se você criar o campo no futuro) */}
                  {item.icone && (
                    <div className="relative w-20 h-20 mx-auto mb-6">
                      <Image 
                        src={item.icone} 
                        alt={item.titulo} 
                        fill 
                        style={{ objectFit: 'contain' }} 
                      />
                    </div>
                  )}

                  <h3 className="text-xl font-bold mb-4 text-gray-800">{item.titulo}</h3>
                  
                  {/* Texto (aparecerá só se você criar o campo no futuro) */}
                  {item.texto && (
                    <p className="text-gray-600 leading-relaxed">{item.texto}</p>
                  )}
                </div>
              )
            ))}
          </div>
        </section>
      )}

     {/* 6. SESSÃO DE LOJAS (REAPROVEITADA) */}
      <Produtos />
    </main>
  );
}