export default function CardsAni() {  
  const variavel1 = [
    { title: "Contracta Engenharia Ltda:", description: "Obra CDHU Bertioga – Transportes, aterro e compactação" },
    { title: "Consórcio Contracta Telar:", description: "Obra Metrô Borba Gato – Transporte, SP" },
    { title: "Sobloco Construtora S.A:", description: "Aterro e terraplenagem – Reurbanização da Vila Militar, Bertioga, SP" },
    { title: "Contracta Engenharia Ltda:", description: "Obra CDH – Terraplanagem, Guarujá, SP" },
    { title: "Fleury S.A:", description: "Terraplenagem – Fleury Jardim Sul, Morumbi, SP" },
    { title: "Fleury S.A:", description: "Terraplenagem – Fleury Anália Franco, SP" }
  ];
  const variavel2 = [
    { title: "DP Barros Pavimentação e Construção Ltda:", description: "Locação de caminhão basculante – Poder Itaim Paulista" },
    { title: "FBS, DP Barros e TIISA:", description: "Terraplenagem e transporte de solo – DAEE Alargamento e Rebaixamento do Rio Baquirivu" },
    { title: "DP Barros Pavimentação e Construção Ltda:", description: "Transporte – Desassoreamento do Rio Tietê, Lote 04" },
    { title: "FBS Construção Civil e Pavimentação S.A:", description: "Terraplenagem – CCR Implantação de Vias Marginais, Osasco, SP" },
    { title: "Consórcio Central:", description: "Transporte de solo – Anhangabaú" },
    { title: "Telar Engenharia e Comércio S.A:", description: "Terraplenagem, transporte de resíduos e pavimentação – CPTM Estação João Dias" }
  ];
  const variavel3 = [
    { title: "Consórcio Canal Tietê:", description: "Transporte de material – Desassoreamento da Calha do Tietê" },
    { title: "Engebras Engenharia S.A:", description: "Terraplenagem e pavimentação – Santa Branca, SP" },
    { title: "AF-FIT Construções e Comércio Ltda:", description: "Terraplenagem e pavimentação – Pinacoteca" },
    { title: "Era-Técnica Engenharia Construção e Serviço Ltda:", description: "Locação de equipamentos – Emergencial Juqueí, São Sebastião, SP" },
    { title: "Era-Técnica Engenharia Construção e Serviço Ltda:", description: "Obra DER-Cubatão – Cubatão, SP" },
    { title: "ITUCITY Empreendimentos Imobiliários SPE Ltda:", description: "Terraplenagem – Bella Florença, Itu, SP" }
  ];

  //* Como são bastante exemplos, fiz dessa forma pra facilitar a manutenção do código, aí seria só adicionar o restante ou puxar de algum banco *//

  const renderCards = (data) => (
    <div className="flex gap-5">
      {data.map((card, index) => (
        <div key={index} className="bg-colorWhite w-max p-[30px] font-inter text-[13px]">
          <strong>{card.title}</strong>
          <br />
          {card.description}
        </div>
      ))}
    </div>
  );

  return (
    <div className="overflow-hidden relative flex flex-col gap-5 p-2">
      <div className="flex animate-scroll-right gap-5">
        {Array(10).fill(renderCards(variavel1))}
      </div>

      <div className="flex animate-scroll-left gap-5">
        {Array(10).fill(renderCards(variavel2))}
      </div>

      <div className="flex animate-scroll-right gap-5">
        {Array(10).fill(renderCards(variavel3))}
      </div>
    </div>
  );
}