import { Card } from "@/components/Card";   // Importa o componente Card de um arquivo local
import { ExampleAreas } from "@/components/ExempleAreas";
import { GeoForm } from "@/components/GeoForms";   // Importa o componente GeoForm de um arquivo local
import { Person } from "@/components/Person";  // Importa o componente Person de um arquivo local
import { peopleList } from "@/data/peopleList";  // Importa a lista de pessoas de um arquivo local
import { peopleList2 } from "@/data/peopleList2";


export default function page () {  // Exporta o componente para que possa ser utilizado em outras partes da aplicação

  // Filtra a lista de pessoas para obter apenas aqueles com a profissão "basketball"
  const listaFiltrada = peopleList2.filter((person) => person.profession === "Quimico")

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
            avatar="https://arquivos.info.ufrn.br/arquivos/20220942038250117992589d1099ed8398/foto_do_perfil.JPG"
            roles={["CEO da Tesla", "CEO da Spacex"]}
        />
      </ExampleAreas>
      {/* Exibe um componente Person para Vitor */}
      <ExampleAreas>
        <p className="font-bold">4)Pessoa Vitor</p>
        <Person
          name="Vitor "
          avatar="https://arquivos.info.ufrn.br/arquivos/20220942038250117992589d1099ed8398/foto_do_perfil.JPG"
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
      <ExampleAreas>
       <p className="font-bold">6)</p>
        {/* Condicional: Exibe a lista de pessoas apenas se houver pessoas na lista */}
        {peopleList.length > 0 &&
          <ul>
            {peopleList.map((pessoa, key) => 
              <li key={key}>Meu id é: {pessoa.id}, meu nome é {pessoa.name}, e minha profissão é: {pessoa.profession}</li>)}
          </ul>
        }
      </ExampleAreas>

      <ExampleAreas>
        <p className="font-bold">7)</p>
        <p>Agora só ira mostrar os químicos, caso eles existam</p>
        {listaFiltrada &&
          <ul>
            {listaFiltrada.map((person, key2) => 
            <li key={key2}>Meu id é: {person.id}, meu nome é {person.name}, e minha profissão é: {person.profession}</li>)}
          </ul>
        }
      </ExampleAreas>
    </div>
  );
}


