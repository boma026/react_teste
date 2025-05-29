import { Card } from "@/components/Card";   // Importa o componente Card de um arquivo local
import { ExampleAreas } from "@/components/ExempleAreas";
import { GeoForm } from "@/components/GeoForms";   // Importa o componente GeoForm de um arquivo local
import { Person } from "@/components/Person";  // Importa o componente Person de um arquivo local
import { peopleList } from "@/data/peopleList";  // Importa a lista de pessoas de um arquivo local

export default function page () {  // Exporta o componente para que possa ser utilizado em outras partes da aplicação

  const list = peopleList.map((person) => {})

  // Filtra a lista de pessoas para obter apenas aqueles com a profissão "basketball"
  const basketball = peopleList.filter(person => person.profession === "basketball");

  return (
    <div>
      <ExampleAreas> {/* componente de exemplo */}
        <h1 className="font-bold">1)Texto muito interessante</h1> 
      </ExampleAreas>

      <ExampleAreas>
      <div>  
        <p className="font-bold">2) Figuras Geométricas</p>
        <GeoForm />  {/* Componente GeoForm */}
      </div>
      </ExampleAreas>
      <ExampleAreas>
        <p className="font-bold">3)Pessoa Boma</p>
        {/* Exibe um componente Person para Arthur Boma */}
        <Person     
            name="Arthur Boma"
            avatar="boma.jpeg"
            roles={["CEO da Tesla", "CEO da Spacex"]}
        />
      </ExampleAreas>
      {/* Exibe um componente Person para Vitor */}
      <ExampleAreas>
        <p className="font-bold">4)Pessoa Gustavo</p>
        <Person
          name="Gustavo"
          avatar="Gustavo.jpeg"
          roles={["CEO do Biome", "CEO dos concursos"]}
        />
      </ExampleAreas>
      {/* Exibe o componente Card com uma frase e autor */}
      <ExampleAreas>
        <p className="font-bold">5) Card</p>
        <Card
          frase="Texto Importante"
          autor="conhecido"
        />
      </ExampleAreas>

      <ul>
        {peopleList.map((index, person) => {
          return(
            
          )
        })}
        <li></li>
      </ul>

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


