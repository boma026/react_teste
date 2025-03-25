import { Card } from "@/components/Card";   // Importa o componente Card de um arquivo local
import { GeoForm } from "@/components/GeoForms";   // Importa o componente GeoForm de um arquivo local
import { Person } from "@/components/Person";  // Importa o componente Person de um arquivo local
import { peopleList } from "@/data/peopleList";  // Importa a lista de pessoas de um arquivo local

function page() {

  // Filtra a lista de pessoas para obter apenas aqueles com a profissão "basketball"
  const basketball = peopleList.filter(person => person.profession === "basketball");

  return (
    <div>
      <h1 className="font-bold">Olá mundo</h1> 
      <h3>Algum outro texo</h3> 

      <div className="border-2 p-3">  
        <GeoForm />  {/* Componente GeoForm */}
      </div>

      {/* Exibe um componente Person para Arthur Boma */}
      <Person
          name="Arthur Boma"
          avatar="https://arquivos.info.ufrn.br/arquivos/20220942038250117992589d1099ed8398/foto_do_perfil.JPG"
          roles={["CEO da Tesla", "CEO da Spacex"]}
      />
      
      {/* Exibe um componente Person para Vitor */}
      <Person
        name="Vitor "
        avatar="https://arquivos.info.ufrn.br/arquivos/20220942038250117992589d1099ed8398/foto_do_perfil.JPG"
        roles={["CEO do Biome", "CEO dos concursos"]}
      />

      {/* Exibe o componente Card com uma frase e autor */}
      <Card
        frase="Texto Importante"
        autor="conhecido"
      />

      {/* Condicional: Exibe a lista de pessoas apenas se houver pessoas na lista */}
      {peopleList.length > 0 && 
        <ul>
          {/* Itera sobre a lista de pessoas e exibe o nome e profissão de cada uma */}
          {peopleList.map(person => 
            <li key={person.id}> {person.name} - {person.profession}</li>)}
        </ul>
      }

      {/* Condicional: Exibe a lista de jogadores de basquete apenas se houver jogadores na lista */}
      {basketball.length > 0 &&
        <>
          <h3>Lista de jogadores de basquete:</h3>  {/* Título da seção de jogadores */}
          <ul>
            {/* Itera sobre a lista de jogadores de basquete e exibe o nome de cada um */}
            {basketball.map(person => 
              <li key={person.id}>{person.name}</li>
            )}
          </ul>
        </>
      }
    </div>
  );
}

export default page;  // Exporta o componente para que possa ser utilizado em outras partes da aplicação
