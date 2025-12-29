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
      
      {/* --- SESSÃO 1: DESTAQUE (IMAGEM INTEIRA) --- */}
      <section className="w-full bg-white pb-12">
        
        {tituloPrincipal && (
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-10 text-center text-black">
              {tituloPrincipal}
            </h1>
          </div>
        )}

        {rotuloImagemUrl && (
          // Altura flexível (60vh) e object-fit: contain garantem que a imagem aparece TODA (sem cortes)
          <div className="relative w-full h-[500px] md:h-[70vh]">
              <Image
                src={rotuloImagemUrl} 
                alt={tituloPrincipal || "Imagem Destaque"}
                fill 
                style={{ objectFit: 'contain' }} 
                className="mx-auto"
                priority 
              />
          </div>
        )}
      </section>

      {/* 2. CTA INTERMEDIÁRIO */}
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

      {/* --- 3 SESSÃO HÍBRIDA: VÍDEO ESQUERDA + CARDS DIREITA --- */}
      <section className="max-w-7xl mx-auto px-4 mt-20 mb-24">
        
        {/* Título da Seção (Centralizado no topo) */}
        {beneficiosTitulo && (
          <h2 className="text-3xl font-bold mb-16 text-center text-black">
            {beneficiosTitulo}
          </h2>
        )}

        {/* CONTAINER FLEX: Define o layout lado a lado no Desktop */}
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
          
          {/* --- COLUNA 1: VÍDEO VERTICAL --- */}
          {/* lg:w-1/2 define que ocupa metade da tela no desktop */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            
            {listaBeneficios && (
              <div className="w-full max-w-[400px] bg-black rounded-3xl overflow-hidden shadow-2xl border border-gray-200 relative">
                {/* O Truque do Padding para manter altura */}
                <div style={{ position: 'relative', width: '100%', paddingBottom: '177.77%' }}>
                  <div 
                    className="absolute top-0 left-0 w-full h-full [&_iframe]:w-full [&_iframe]:h-full"
                    dangerouslySetInnerHTML={{ __html: listaBeneficios }}
                  />
                </div>
              </div>
            )}
            
          </div>

          {/* --- COLUNA 2: LISTA DE BENEFÍCIOS (CARDS) --- */}
          {/* lg:w-1/2 ocupa a outra metade */}
          <div className="w-full lg:w-1/2">
            
            {gridData.titulo1 && (
              // Mudei para 'grid-cols-1' para criar uma lista vertical bonita ao lado do vídeo
              <div className="grid grid-cols-1 gap-6">
                {gridTriplo.map((item, index) => (
                  item.titulo && (
                    <div key={index} className="bg-white p-8 rounded-xl shadow-md border border-gray-100 text-left hover:shadow-xl transition-all duration-300 transform hover:-translate-x-1 flex items-center gap-6">
                      
                      {/* Ícone (Opcional - lado esquerdo do texto) */}
                      {item.icone && (
                        <div className="relative w-16 h-16 flex-shrink-0">
                          <Image 
                            src={item.icone} 
                            alt={item.titulo} 
                            fill 
                            style={{ objectFit: 'contain' }} 
                          />
                        </div>
                      )}

                      {/* Conteúdo do Card */}
                      <div>
                        <h3 className="text-xl font-bold text-gray-800">{item.titulo}</h3>
                        {item.texto && (
                          <p className="text-gray-600 mt-2 text-sm leading-relaxed">{item.texto}</p>
                        )}
                      </div>

                    </div>
                  )
                ))}
              </div>
            )}

          </div>

        </div>
      </section>
      

      {/* 5. SEÇÃO DE SERVIÇOS (DESIGN REFINADO) */}
      {servicosTitulo && (
        <section className="max-w-7xl mx-auto px-4 mt-24 mb-24">
            
            {/* Título com mais destaque */}
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-black">
              {servicosTitulo}
            </h2>

            {/* Grid: 
                - items-center: Centraliza o texto verticalmente com a imagem.
                - gap-12 lg:gap-20: Dá muito mais espaço entre a foto e o texto.
            */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                
                {/* LADO 1: IMAGEM */}
                {imagemServicosUrl && (
                    <div className="relative h-[300px] lg:h-[500px] rounded-3xl overflow-hidden shadow-xl">
                        <Image 
                          src={imagemServicosUrl} 
                          alt={servicosTitulo} 
                          fill 
                          style={{ objectFit: 'cover' }} 
                          className="transition-transform duration-700 hover:scale-105" // Pequeno zoom ao passar o rato
                        />
                    </div>
                )}

                {/* LADO 2: TEXTO */}
                {servicosDescricao && (
                    <div className="flex flex-col justify-center">
                        {/* prose-lg: Aumenta o tamanho da fonte (fica mais elegante).
                           text-gray-600: Um cinza escuro é mais chique que preto puro.
                           leading-relaxed: Aumenta o espaço entre linhas.
                        */}
                        <div 
                            className="prose prose-lg max-w-none text-gray-600 leading-relaxed [&>p]:mb-6"
                            dangerouslySetInnerHTML={{ __html: servicosDescricao }} 
                        />
                    </div>
                )}
            </div>
        </section>
      )}
            


       

     {/* 6. SESSÃO DE LOJAS (REAPROVEITADA) */}
      <Produtos />
    </main>
  );
}