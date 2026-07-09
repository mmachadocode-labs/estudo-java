const modules = [
  {
    title: "Fundamentos de programação",
    short: "Lógica, variáveis, loops e validação.",
    objective: "Consolidar os fundamentos sem recomeçar do zero.",
    checklist: ["contador x acumulador", "for com < e <=", "índice começando em 0", "for-each em Java", "validação de entrada"],
    content: ["algoritmos", "variáveis e tipos", "condicionais", "loops", "funções", "arrays/listas", "entrada e saída"],
    practice: "Criar um cadastro simples de itens com entrada de dados, lista, cálculo de total e validação.",
    criteria: ["menu e fluxo funcionando", "lista de itens armazenada", "total por item calculado", "total geral calculado", "validações básicas aplicadas"]
  },
  {
    title: "Java como ferramenta",
    short: "Sintaxe, IntelliJ, métodos e exceções.",
    objective: "Recuperar fluência em Java e reduzir atrito de sintaxe.",
    checklist: ["IntelliJ", "estrutura de projeto", "pacotes e imports", "main", "métodos static", "escopo de variáveis", "tipos primitivos x wrappers", "String", "ArrayList tipado", "conversões String para int/double", "try-catch", "métodos auxiliares"],
    content: ["estrutura de classe", "métodos", "imports", "coleções básicas", "conversões", "tratamento de exceções"],
    practice: "Refazer o cadastro de itens no IntelliJ usando métodos: pedirNome, pedirQuantidade, pedirValorUnitario, adicionarItem, listarItens e calcularTotalGeral.",
    criteria: ["programa compila no IntelliJ", "métodos separados", "validação com loop", "try-catch para número inválido"]
  },
  {
    title: "Orientação a objetos aplicada",
    short: "Composição, interface e polimorfismo.",
    objective: "Transformar lógica procedural em classes reais e entender os pontos que ainda não fixaram.",
    checklist: ["classe", "objeto", "atributo", "método", "encapsulamento", "construtor", "composição", "herança", "interface", "polimorfismo"],
    content: ["Cliente", "Obra", "Orcamento", "ItemOrcamento", "interface Calculavel", "ItemMaterial", "ItemServico"],
    practice: "Transformar o cadastro de itens em classes reais e calcular totais usando a interface Calculavel.",
    criteria: ["sem Object[]", "classes com responsabilidade clara", "composição usada corretamente", "interface usada como contrato", "total calculado por polimorfismo"]
  },
  {
    title: "Collections, Generics e organização de dados",
    short: "List, Set, Map, equals e Comparator.",
    objective: "Dominar estruturas de dados usadas no Java do dia a dia.",
    checklist: ["List", "ArrayList", "Set", "HashSet", "Map", "HashMap", "Generics", "equals e hashCode", "Comparable", "Comparator"],
    content: ["listas tipadas", "busca por código", "agrupamento", "ordenação", "remoção de duplicados"],
    practice: "Comparar duas listas de materiais R01 x R02 e mostrar itens novos, removidos, aumentos e reduções.",
    criteria: ["usa Map para busca eficiente", "identifica diferenças corretamente", "ordena resultado", "evita duplicidade"]
  },
  {
    title: "Lambdas, Streams e Optional",
    short: "Ação por parâmetro e Java moderno.",
    objective: "Fixar Java moderno sem teoria excessiva.",
    checklist: ["lambda como ação por parâmetro", "forEach", "filter", "map", "reduce", "sorted", "toList", "Optional", "orElse", "orElseThrow", "method reference"],
    content: ["streams sobre listas", "transformações", "filtros", "somas", "busca com Optional"],
    practice: "Criar consultas sobre uma lista de itens usando streams, sem for tradicional.",
    criteria: ["usa filter para regras", "usa map para transformação", "usa Optional para busca", "evita null sem tratamento"]
  },
  {
    title: "HTTP, APIs e REST",
    short: "Base web moderna antes do Spring.",
    objective: "Preencher a lacuna entre JSF e backend moderno com APIs.",
    checklist: ["HTTP", "request e response", "headers", "body", "JSON", "status codes", "GET", "POST", "PUT/PATCH", "DELETE", "REST", "endpoints"],
    content: ["recursos", "URLs", "payload JSON", "status 200/201/400/404/409/500", "contratos de API"],
    practice: "Desenhar uma API de clientes, obras e orçamentos com métodos HTTP, URLs e exemplos de JSON.",
    criteria: ["URLs coerentes", "métodos HTTP corretos", "JSON claro", "status codes adequados"]
  },
  {
    title: "Spring Boot básico",
    short: "Controller, Service, Repository e DTO.",
    objective: "Criar uma API REST funcionando com camadas simples.",
    checklist: ["@RestController", "@RequestMapping", "@GetMapping", "@PostMapping", "@PutMapping", "@DeleteMapping", "@RequestBody", "@PathVariable", "ResponseEntity", "Controller", "Service", "Repository", "DTO", "Entity"],
    content: ["camadas", "requisições", "respostas", "DTOs", "repositório em memória"],
    practice: "Criar uma API CRUD de Cliente com Controller, Service e repositório fake em memória.",
    criteria: ["CRUD completo", "camadas separadas", "DTOs usados", "sem regra de negócio no Controller"]
  },
  {
    title: "Banco de dados, JPA e PostgreSQL",
    short: "Persistência real com entidades e repositórios.",
    objective: "Persistir dados de verdade e entender o papel do banco.",
    checklist: ["entidade", "tabela", "chave primária", "relacionamento", "@Entity", "@Id", "@GeneratedValue", "JpaRepository", "Optional no findById", "PostgreSQL", "migrations"],
    content: ["JPA", "Hibernate", "relacionamento Cliente-Obra", "repositórios", "consultas"],
    practice: "Criar CRUD de Cliente e Obra com PostgreSQL, onde Obra pertence a Cliente.",
    criteria: ["dados persistidos", "relacionamento correto", "findById tratado com Optional", "estrutura pronta para migrations"]
  },
  {
    title: "Validação e tratamento de erros",
    short: "Mensagens claras e status HTTP corretos.",
    objective: "Deixar a API previsível e profissional.",
    checklist: ["@NotBlank", "@NotNull", "@Positive", "@Valid", "exceções customizadas", "@ControllerAdvice", "erro 400", "erro 404", "erro 409", "mensagens padronizadas"],
    content: ["validação de entrada", "erros de domínio", "respostas padronizadas", "tratamento global"],
    practice: "Retornar 404 para cliente inexistente, 400 para dados inválidos e mensagens claras de erro.",
    criteria: ["validação no backend", "erros padronizados", "status HTTP correto", "mensagens úteis"]
  },
  {
    title: "Lombok, records e verbosidade",
    short: "Redução de boilerplate com critério.",
    objective: "Usar ferramentas modernas sem esconder decisões importantes.",
    checklist: ["@Getter", "@Setter", "@NoArgsConstructor", "@AllArgsConstructor", "@Builder", "cuidado com @Data", "record para DTO", "quando usar Lombok", "quando evitar Lombok"],
    content: ["boilerplate", "DTOs com record", "entidades com Lombok", "limites do @Data"],
    practice: "Refatorar DTOs para records e usar Lombok com critério nas entidades.",
    criteria: ["menos código repetitivo", "sem @Data em entidade complexa", "DTOs simples e claros"]
  },
  {
    title: "Segurança básica em backend",
    short: "Autenticação, autorização e permissões.",
    objective: "Aplicar segurança como parte do design, não como revisão final.",
    checklist: ["autenticação", "autorização", "permissões no backend", "hash de senha", "JWT ou sessão", "variáveis de ambiente", "CORS", "menor privilégio", "dados sensíveis", "logs relevantes"],
    content: ["login", "roles", "segredos", "validação no backend", "logs administrativos"],
    practice: "Adicionar usuário comum e admin. Usuário comum não pode excluir cadastro; admin pode.",
    criteria: ["permissões no backend", "segredos fora do código", "rotas protegidas", "logs relevantes"]
  },
  {
    title: "Threads, async e tarefas em segundo plano",
    short: "Concorrência, paralelismo e @Async.",
    objective: "Entender threads pelo uso real: tarefas demoradas e processamento paralelo.",
    checklist: ["Thread", "Runnable", "ExecutorService", "Future", "CompletableFuture", "synchronized", "race condition", "deadlock", "concorrência x paralelismo", "@Async no Spring"],
    content: ["tarefa em segundo plano", "contador compartilhado", "processamento paralelo", "resultados parciais"],
    practice: "Simular uma importação demorada em segundo plano e depois processar uma lista grande em paralelo somando resultados parciais.",
    criteria: ["não bloqueia fluxo principal", "resultado final correto", "evita race condition", "usa ExecutorService ou CompletableFuture"]
  },
  {
    title: "Testes",
    short: "JUnit, Mockito e integração.",
    objective: "Validar regra sem depender de teste manual.",
    checklist: ["teste unitário", "teste de integração", "JUnit", "Mockito", "testes de Service", "testes de Controller", "casos extremos"],
    content: ["testes de cálculo", "validação", "cliente inexistente", "permissão negada"],
    practice: "Testar cálculo de orçamento, validação de quantidade, cliente inexistente e permissão negada.",
    criteria: ["testes relevantes", "casos de sucesso e erro", "regras críticas cobertas"]
  },
  {
    title: "Projeto final",
    short: "Mini Sistema de Orçamentos completo.",
    objective: "Consolidar tudo em um sistema pequeno, útil e completo.",
    checklist: ["clientes", "obras", "itens", "categorias", "orçamento", "cálculo de total", "API REST", "PostgreSQL", "validação", "tratamento de erro", "login simples", "testes principais", "documentação dos endpoints"],
    content: ["backend completo", "modelo de domínio", "persistência", "segurança básica", "testes", "documentação"],
    practice: "Entregar um Mini Sistema de Orçamentos completo, do banco ao backend, com validação, segurança básica e testes.",
    criteria: ["fluxo principal funcionando", "código organizado", "API documentada", "dados persistidos", "testes principais passando"]
  }
];

const menu = document.querySelector("#menu");
const moduleDetail = document.querySelector("#module");

function list(items, className = "checklist") {
  return `<ul class="${className}">${items.map(item => `<li>${item}</li>`).join("")}</ul>`;
}

function renderModule(index) {
  const module = modules[index];

  document.querySelectorAll(".menu button").forEach((button, buttonIndex) => {
    button.classList.toggle("active", buttonIndex === index);
  });

  moduleDetail.innerHTML = `
    <div class="module-header">
      <div class="module-index">${String(index + 1).padStart(2, "0")}</div>
      <div>
        <h3>${module.title}</h3>
        <p>${module.objective}</p>
      </div>
    </div>

    <div class="module-grid">
      <div class="block">
        <h4>Checklist</h4>
        ${list(module.checklist)}
      </div>

      <div class="block">
        <h4>Conteúdo mínimo</h4>
        ${list(module.content)}
      </div>

      <div class="block full">
        <h4>Prova prática</h4>
        <p class="practice">${module.practice}</p>
      </div>

      <div class="block full">
        <h4>Critério de aprovação</h4>
        ${list(module.criteria, "criteria")}
      </div>
    </div>

    <p class="footer-note">Use o módulo como uma lista de validação. Avance apenas quando conseguir explicar e aplicar os itens principais.</p>
  `;
}

function renderMenu() {
  menu.innerHTML = modules.map((module, index) => `
    <button type="button" data-index="${index}">
      <span class="number">${index + 1}</span>
      <span>
        <strong>${module.title}</strong>
        <small>${module.short}</small>
      </span>
    </button>
  `).join("");

  menu.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => renderModule(Number(button.dataset.index)));
  });
}

renderMenu();
renderModule(0);
