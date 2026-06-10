// Estoque de Pets da RakyOfficialStore
const estoque = [
    // 🥚 OVOS
    { nome: "Ovo", variacao: "NP", valor: 0.25, categoria: "🥚 Ovos" },
    { nome: "Pintinho Zodíaco", variacao: "NP", valor: 0.19, categoria: "🥚 Ovos" },
    
    // ✨ POÇÕES E ITENS ESPECIAIS
    { nome: "Poção Montável", variacao: "✨ Especial", valor: 2.49, categoria: "✨ Poções/Especiais" },
    { nome: "Poção Voável", variacao: "✨ Especial", valor: 3.99, categoria: "✨ Poções/Especiais" },
    { nome: "Pena Slimingo", variacao: "✨ Especial", valor: 6.99, categoria: "✨ Poções/Especiais" },
    { nome: "Globo de Disco", variacao: "✨ Especial", valor: 3.99, categoria: "✨ Poções/Especiais" },
    
    // 🔥 LENDÁRIOS / MAIS VALOROSOS
    { nome: "Coruja", variacao: "NFR", valor: 799.89, categoria: "🔥 Lendário" },
    { nome: "Frost Dragon", variacao: "NP", valor: 389.89, categoria: "🔥 Lendário" },
    { nome: "Bat Dragon", variacao: "FR", valor: 1179.89, categoria: "🔥 Lendário" },
    { nome: "Unicórnio Evil", variacao: "NFR", valor: 299.89, categoria: "🔥 Lendário" },
    { nome: "Unicórnio Evil", variacao: "R", valor: 154.89, categoria: "🔥 Lendário" },
    { nome: "Ouriço", variacao: "NP", valor: 82.79, categoria: "🔥 Lendário" },
    { nome: "Canguru", variacao: "FR", valor: 29.99, categoria: "🔥 Lendário" },
    { nome: "Rei Macaco", variacao: "NP", valor: 27.99, categoria: "🔥 Lendário" },
    { nome: "Crocodilo", variacao: "NP", valor: 20.99, categoria: "🔥 Lendário" },
    { nome: "Tartaruga", variacao: "NP", valor: 29.99, categoria: "🔥 Lendário" },
    { nome: "Gatoelho", variacao: "FR", valor: 48.78, categoria: "🔥 Lendário" },
    { nome: "Dálmata", variacao: "FR", valor: 64.89, categoria: "🔥 Lendário" },
    { nome: "Rena do Ártico", variacao: "NP", valor: 69.99, categoria: "🔥 Lendário" },
    { nome: "Canguru", variacao: "NFR", valor: 64.99, categoria: "🔥 Lendário" },
    { nome: "Coruja Romrom", variacao: "NP", valor: 0.89, categoria: "🔥 Lendário" },
    { nome: "Dragão Antigo", variacao: "NP", valor: 0.79, categoria: "🔥 Lendário" },
    { nome: "Quimera", variacao: "NP", valor: 0.79, categoria: "🔥 Lendário" },
    { nome: "Baleia Azul", variacao: "NP", valor: 0.79, categoria: "🔥 Lendário" },
    { nome: "Dimension Driver", variacao: "NP", valor: 0.83, categoria: "🔥 Lendário" },
    { nome: "Garanhão Flamejante", variacao: "NP", valor: 1.65, categoria: "🔥 Lendário" },
    { nome: "Urso Gelido", variacao: "NP", valor: 15.99, categoria: "🔥 Lendário" },
    { nome: "Dragão Dourado", variacao: "NP", valor: 0.89, categoria: "🔥 Lendário" },
    { nome: "Caranguejo Glorminoso", variacao: "NP", valor: 0.89, categoria: "🔥 Lendário" },
    { nome: "Besouro Tartaruga Dourado", variacao: "NP", valor: 0.79, categoria: "🔥 Lendário" },
    { nome: "Quetzalcoatl", variacao: "NP", valor: 0.79, categoria: "🔥 Lendário" },
    { nome: "Corvo Espantalho", variacao: "NP", valor: 0.89, categoria: "🔥 Lendário" },
    { nome: "Camaradinha do Templo", variacao: "NP", valor: 0.79, categoria: "🔥 Lendário" },
    { nome: "Unicórnio Sem Poção", variacao: "NP", valor: 1.99, categoria: "🔥 Lendário" },
    { nome: "Spaniel do Palácio Real", variacao: "NP", valor: 2.25, categoria: "🔥 Lendário" },
    { nome: "Peru", variacao: "NFR", valor: 19.99, categoria: "🔥 Lendário" },
    
    // 🐉 DRAGÕES
    { nome: "Dragão Vermelho", variacao: "MFR", valor: 12.99, categoria: "🐉 Dragões" },
    { nome: "Dragão Antigo", variacao: "Neon", valor: 6.99, categoria: "🐉 Dragões" },
    { nome: "Dragão Vermelho", variacao: "NR", valor: 5.99, categoria: "🐉 Dragões" },
    { nome: "Dragão Dourado", variacao: "NP", valor: 0.89, categoria: "🐉 Dragões" },
    { nome: "Dragão Antigo", variacao: "NP", valor: 0.89, categoria: "🐉 Dragões" },
    { nome: "Dragão Vermelho", variacao: "NP", valor: 0.89, categoria: "🐉 Dragões" },
    
    // 🦄 ALICÓRNIOS / UNICÓRNIOS
    { nome: "Unicórnio", variacao: "Neon", valor: 13.99, categoria: "🦄 Alicórnios" },
    { nome: "Alicórnio", variacao: "NR", valor: 5.99, categoria: "🦄 Alicórnios" },
    { nome: "Alicórnio", variacao: "NP", valor: 0.89, categoria: "🦄 Alicórnios" },
    { nome: "Unicórnio Dourado", variacao: "NP", valor: 0.99, categoria: "🦄 Alicórnios" },
    { nome: "Unicórnio Diamante", variacao: "NP", valor: 0.89, categoria: "🦄 Alicórnios" },
    { nome: "Unicórnio", variacao: "MFR", valor: 39.89, categoria: "🦄 Alicórnios" },
    
    // 🦅 GRIFOS
    { nome: "Grifo", variacao: "NFR", valor: 7.99, categoria: "🦅 Grifos" },
    { nome: "Grifo Dourado", variacao: "FR", valor: 2.65, categoria: "🦅 Grifos" },
    { nome: "Grifo Diamante", variacao: "FR", valor: 2.65, categoria: "🦅 Grifos" },
    { nome: "Grifo Dourado", variacao: "NP", valor: 0.89, categoria: "🦅 Grifos" },
    { nome: "Grifo Diamante", variacao: "NP", valor: 0.89, categoria: "🦅 Grifos" },
    
    // 🐻 URSOS
    { nome: "Urso Gelado", variacao: "NP", valor: 11.89, categoria: "🐻 Ursos" },
    { nome: "Urso Marrom", variacao: "NP", valor: 7.99, categoria: "🐻 Ursos" },
    { nome: "Urso Gato Asiático", variacao: "NFR", valor: 4.99, categoria: "🐻 Ursos" },
    { nome: "Urso Gato Asiático", variacao: "F", valor: 1.65, categoria: "🐻 Ursos" },
    { nome: "Urso Glacial", variacao: "NP", valor: 1.65, categoria: "🐻 Ursos" },
    { nome: "Urso Lunar", variacao: "NP", valor: 0.79, categoria: "🐻 Ursos" },
    
    // 🐯 TIGRES
    { nome: "Tigre Alado", variacao: "NP", valor: 16.99, categoria: "🐯 Tigres" },
    { nome: "Tigre Lunar", variacao: "NP", valor: 1.65, categoria: "🐯 Tigres" },
    
    // 🦉 CORUJAS
    { nome: "Coruja Purr", variacao: "NR", valor: 6.99, categoria: "🦉 Corujas" },
    { nome: "Coruja Purr", variacao: "NP", valor: 0.99, categoria: "🦉 Corujas" },
    { nome: "Coruja Invernal", variacao: "NP", valor: 0.89, categoria: "🦉 Corujas" },
    { nome: "Coruja Tangerina", variacao: "NP", valor: 0.79, categoria: "🦉 Corujas" },
    
    // 🦇 MORCEGOS
    { nome: "Morcego de Morango Bat Dragon", variacao: "NP", valor: 44.89, categoria: "🦇 Morcegos" },
    { nome: "Morcegato", variacao: "N", valor: 5.99, categoria: "🦇 Morcegos" },
    { nome: "Morcego Pacó", variacao: "NP", valor: 1.65, categoria: "🦇 Morcegos" },
    { nome: "Morcegato", variacao: "NP", valor: 0.89, categoria: "🦇 Morcegos" },
    { nome: "Morcego Albino", variacao: "NP", valor: 0.65, categoria: "🦇 Morcegos" },
    
    // 🐺 LOBOS
    { nome: "Lobo", variacao: "NR", valor: 7.99, categoria: "🐺 Lobos" },
    { nome: "Lobo", variacao: "N", valor: 5.99, categoria: "🐺 Lobos" },
    { nome: "Lobo Fantasma", variacao: "NP", valor: 1.90, categoria: "🐺 Lobos" },
    { nome: "Lobo de Lava", variacao: "NP", valor: 0.89, categoria: "🐺 Lobos" },
    
    // 🦜 PAPAGAIOS / AVES
    { nome: "Papagaio Drácula", variacao: "N", valor: 4.37, categoria: "🦜 Aves" },
    { nome: "Papagaio Drácula", variacao: "NP", valor: 0.69, categoria: "🦜 Aves" },
    { nome: "Papagaio Drácula", variacao: "FR", valor: 2.25, categoria: "🦜 Aves" },
    { nome: "Tucano", variacao: "N", valor: 0.99, categoria: "🦜 Aves" },
    { nome: "Tucano", variacao: "NP", valor: 0.59, categoria: "🦜 Aves" },
    { nome: "Cegonha Marabu", variacao: "NP", valor: 0.59, categoria: "🦜 Aves" },
    
    // 🐦 OUTRAS AVES
    { nome: "Corvo Espantalho", variacao: "NFR", valor: 7.99, categoria: "🐦 Aves" },
    { nome: "Corvo Espantalho", variacao: "NP", valor: 0.79, categoria: "🐦 Aves" },
    { nome: "Corvo Kage", variacao: "N", valor: 1.99, categoria: "🐦 Aves" },
    { nome: "Falcão", variacao: "NP", valor: 0.89, categoria: "🐦 Aves" },
    { nome: "Faisão de Peito Verde", variacao: "NP", valor: 0.99, categoria: "🐦 Aves" },
    { nome: "Faisão de Peito Marrom", variacao: "NP", valor: 0.49, categoria: "🐦 Aves" },
    { nome: "Albatroz", variacao: "N", valor: 1.90, categoria: "🐦 Aves" },
    { nome: "Albatroz Dourado", variacao: "R", valor: 1.65, categoria: "🐦 Aves" },
    { nome: "Ave do Amor", variacao: "NP", valor: 0.90, categoria: "🐦 Aves" },
    { nome: "Pombinhas", variacao: "N", valor: 0.99, categoria: "🐦 Aves" },
    
    // 🐟 AQUÁTICOS
    { nome: "Peixe Palhaço", variacao: "FR", valor: 2.65, categoria: "🐟 Aquáticos" },
    { nome: "Peixe Espada", variacao: "R", valor: 1.90, categoria: "🐟 Aquáticos" },
    { nome: "Peixe Espada", variacao: "N", valor: 0.90, categoria: "🐟 Aquáticos" },
    { nome: "Golfinho Glorminoso", variacao: "NP", valor: 0.99, categoria: "🐟 Aquáticos" },
    { nome: "Golfinho", variacao: "R", valor: 1.65, categoria: "🐟 Aquáticos" },
    { nome: "Baleia Azul", variacao: "NP", valor: 0.74, categoria: "🐟 Aquáticos" },
    { nome: "Peixe Betta", variacao: "NP", valor: 0.89, categoria: "🐟 Aquáticos" },
    { nome: "Lula", variacao: "NP", valor: 0.78, categoria: "🐟 Aquáticos" },
    { nome: "Camarão", variacao: "NP", valor: 0.99, categoria: "🐟 Aquáticos" },
    { nome: "Caranguejo Pirata", variacao: "NP", valor: 0.89, categoria: "🐟 Aquáticos" },
    { nome: "Bolacha do Mar", variacao: "NP", valor: 1.65, categoria: "🐟 Aquáticos" },
    { nome: "Estrela do Mar", variacao: "NP", valor: 0.59, categoria: "🐟 Aquáticos" },
    { nome: "Cavalo-Marinho", variacao: "NP", valor: 0.99, categoria: "🐟 Aquáticos" },
    { nome: "Carpa Koi", variacao: "NP", valor: 0.99, categoria: "🐟 Aquáticos" },
    { nome: "Orca", variacao: "NP", valor: 0.99, categoria: "🐟 Aquáticos" },
    { nome: "Peixe Betta Laranja", variacao: "NP", valor: 0.90, categoria: "🐟 Aquáticos" },
    { nome: "Arraia", variacao: "NR", valor: 1.90, categoria: "🐟 Aquáticos" },
    
    // 🦀 CRUSTÁCEOS
    { nome: "Caranguejo", variacao: "NR", valor: 1.90, categoria: "🦀 Crustáceos" },
    { nome: "Santola", variacao: "R", valor: 1.49, categoria: "🦀 Crustáceos" },
    { nome: "Lagosta Chiclete", variacao: "NP", valor: 0.68, categoria: "🦀 Crustáceos" },
    
    // 🐱 GATOS
    { nome: "Gato Múmia", variacao: "NP", valor: 1.65, categoria: "🐱 Gatos" },
    { nome: "Gato Leopardo", variacao: "NP", valor: 1.65, categoria: "🐱 Gatos" },
    { nome: "Gato Abissínio", variacao: "NP", valor: 0.90, categoria: "🐱 Gatos" },
    { nome: "Gato das Neves", variacao: "NFR", valor: 1.99, categoria: "🐱 Gatos" },
    { nome: "Gato Ruivo", variacao: "M", valor: 2.99, categoria: "🐱 Gatos" },
    { nome: "Gato", variacao: "MR", valor: 2.99, categoria: "🐱 Gatos" },
    { nome: "Mecha Gato", variacao: "NP", valor: 1.25, categoria: "🐱 Gatos" },
    
    // 🐶 CACHORROS
    { nome: "Cão Robô", variacao: "NP", valor: 6.43, categoria: "🐶 Cachorros" },
    { nome: "Cão Robô", variacao: "R", valor: 1.65, categoria: "🐶 Cachorros" },
    { nome: "Husky", variacao: "NP", valor: 3.65, categoria: "🐶 Cachorros" },
    { nome: "São Bernardo", variacao: "NP", valor: 0.90, categoria: "🐶 Cachorros" },
    { nome: "Pomerânia", variacao: "NP", valor: 0.99, categoria: "🐶 Cachorros" },
    { nome: "Poodle", variacao: "MFR", valor: 2.99, categoria: "🐶 Cachorros" },
    { nome: "Poodle", variacao: "MR", valor: 2.99, categoria: "🐶 Cachorros" },
    { nome: "Shih Tzu", variacao: "Neon", valor: 0.90, categoria: "🐶 Cachorros" },
    { nome: "Dog", variacao: "MR", valor: 2.99, categoria: "🐶 Cachorros" },
    
    // 🐮 VACAS / TOUROS
    { nome: "Vaca Angus", variacao: "Mega", valor: 4.99, categoria: "🐮 Vacas/Touros" },
    { nome: "Vaca Angus", variacao: "Neon", valor: 1.47, categoria: "🐮 Vacas/Touros" },
    { nome: "Vaca das Terras Altas", variacao: "NP", valor: 0.99, categoria: "🐮 Vacas/Touros" },
    { nome: "Vaca Irlandesa", variacao: "NP", valor: 1.99, categoria: "🐮 Vacas/Touros" },
    { nome: "Bezerro Angus", variacao: "NP", valor: 1.24, categoria: "🐮 Vacas/Touros" },
    { nome: "Touro", variacao: "NR", valor: 1.19, categoria: "🐮 Vacas/Touros" },
    
    // 🐭 ROEDORES
    { nome: "Rato Nalmiscarado", variacao: "MR", valor: 3.25, categoria: "🐭 Roedores" },
    { nome: "Rato Nalmiscarado", variacao: "M", valor: 2.99, categoria: "🐭 Roedores" },
    { nome: "Rato", variacao: "M", valor: 1.99, categoria: "🐭 Roedores" },
    { nome: "Rato", variacao: "N", valor: 0.89, categoria: "🐭 Roedores" },
    { nome: "Hamster", variacao: "R", valor: 1.65, categoria: "🐭 Roedores" },
    { nome: "Camundongo", variacao: "R", valor: 1.65, categoria: "🐭 Roedores" },
    { nome: "Esquilo Vermelho", variacao: "R", valor: 1.65, categoria: "🐭 Roedores" },
    { nome: "Esquilo Querubim", variacao: "NP", valor: 0.89, categoria: "🐭 Roedores" },
    { nome: "Musaranho", variacao: "R", valor: 7.99, categoria: "🐭 Roedores" },
    
    // 🐰 COELHOS / LEBRES
    { nome: "Rena", variacao: "N", valor: 14.99, categoria: "🐰 Coelhos/Lebres" },
    { nome: "Lebre", variacao: "NP", valor: 6.99, categoria: "🐰 Coelhos/Lebres" },
    { nome: "Lebre Ártica", variacao: "NFR", valor: 2.99, categoria: "🐰 Coelhos/Lebres" },
    { nome: "Coelho", variacao: "NR", valor: 1.90, categoria: "🐰 Coelhos/Lebres" },
    { nome: "Coelho", variacao: "N", valor: 0.90, categoria: "🐰 Coelhos/Lebres" },
    { nome: "Coelho d'Água", variacao: "NR", valor: 1.89, categoria: "🐰 Coelhos/Lebres" },
    { nome: "Chocolate Coelho", variacao: "NP", valor: 0.99, categoria: "🐰 Coelhos/Lebres" },
    { nome: "Sr. Coelhito", variacao: "NP", valor: 0.79, categoria: "🐰 Coelhos/Lebres" },
    { nome: "Sra. Coelhita", variacao: "N", valor: 2.99, categoria: "🐰 Coelhos/Lebres" },
    
    // 🐧 PINGUINS
    { nome: "Pinguim de Chocolate", variacao: "MR", valor: 13.78, categoria: "🐧 Pinguins" },
    { nome: "Pinguim", variacao: "NP", valor: 2.99, categoria: "🐧 Pinguins" },
    { nome: "Pinguim de Chocolate", variacao: "NP", valor: 0.99, categoria: "🐧 Pinguins" },
    { nome: "Pinguim Rei Dourado", variacao: "NP", valor: 1.19, categoria: "🐧 Pinguins" },
    
    // 🐵 MACACOS
    { nome: "Macaco", variacao: "NR", valor: 1.90, categoria: "🐵 Macacos" },
    { nome: "Macaco", variacao: "R", valor: 1.49, categoria: "🐵 Macacos" },
    { nome: "Macaco", variacao: "N", valor: 0.89, categoria: "🐵 Macacos" },
    { nome: "Gibão Vilão", variacao: "N", valor: 4.99, categoria: "🐵 Macacos" },
    { nome: "Gibão Vilão", variacao: "NP", valor: 0.79, categoria: "🐵 Macacos" },
    { nome: "Orangotango", variacao: "F", valor: 1.65, categoria: "🐵 Macacos" },
    
    // 🦎 RÉPTEIS
    { nome: "Cobra", variacao: "R", valor: 1.65, categoria: "🦎 Répteis" },
    { nome: "Iguana Chiclete", variacao: "NP", valor: 0.89, categoria: "🦎 Répteis" },
    { nome: "Serpente", variacao: "N", valor: 0.99, categoria: "🦎 Répteis" },
    { nome: "Teiú", variacao: "M", valor: 1.99, categoria: "🦎 Répteis" },
    { nome: "Crocodilo", variacao: "R", valor: 20.99, categoria: "🦎 Répteis" },
    { nome: "Crocodilo", variacao: "N", valor: 62.67, categoria: "🦎 Répteis" },
    { nome: "Deinonychus", variacao: "NR", valor: 1.89, categoria: "🦎 Répteis" },
    
    // 🦋 INSETOS
    { nome: "Abelha", variacao: "NFR", valor: 3.99, categoria: "🦋 Insetos" },
    { nome: "Joaninha", variacao: "NR", valor: 1.89, categoria: "🦋 Insetos" },
    { nome: "Joaninha Dourada", variacao: "FR", valor: 2.65, categoria: "🦋 Insetos" },
    { nome: "Joaninha de Diamante", variacao: "FR", valor: 2.65, categoria: "🦋 Insetos" },
    { nome: "Borboleta Violeta", variacao: "NP", valor: 1.65, categoria: "🦋 Insetos" },
    { nome: "Besouro Tartaruga", variacao: "NP", valor: 0.79, categoria: "🦋 Insetos" },
    { nome: "Escaravelho Azul", variacao: "NFR", valor: 2.54, categoria: "🦋 Insetos" },
    { nome: "Vagalume", variacao: "NP", valor: 2.65, categoria: "🦋 Insetos" },
    { nome: "Libélula", variacao: "NR", valor: 4.99, categoria: "🦋 Insetos" },
    { nome: "Libélula", variacao: "NP", valor: 0.69, categoria: "🦋 Insetos" },
    { nome: "Mariposa", variacao: "NP", valor: 0.89, categoria: "🦋 Insetos" },
    { nome: "Mariposa de Gelo", variacao: "NP", valor: 0.89, categoria: "🦋 Insetos" },
    
    // 🦊 OUTROS ANIMAIS
    { nome: "Raposa Sorrateira", variacao: "M", valor: 2.99, categoria: "🦊 Outros Animais" },
    { nome: "Raposa (Fênix)", variacao: "NP", valor: 0.99, categoria: "🦊 Outros Animais" },
    { nome: "Jaguar", variacao: "Mega", valor: 2.99, categoria: "🦊 Outros Animais" },
    { nome: "Onça Parda", variacao: "NP", valor: 1.59, categoria: "🦊 Outros Animais" },
    { nome: "Onça", variacao: "N", valor: 0.99, categoria: "🦊 Outros Animais" },
    { nome: "Lince", variacao: "NP", valor: 1.25, categoria: "🦊 Outros Animais" },
    { nome: "Koala", variacao: "NP", valor: 0.99, categoria: "🦊 Outros Animais" },
    { nome: "Panda Vermelho", variacao: "N", valor: 0.90, categoria: "🦊 Outros Animais" },
    { nome: "Panda Vermelho", variacao: "NP", valor: 0.89, categoria: "🦊 Outros Animais" },
    { nome: "Guaxinim", variacao: "NP", valor: 0.99, categoria: "🦊 Outros Animais" },
    { nome: "Poodle", variacao: "MFR", valor: 3.89, categoria: "🦊 Outros Animais" },
    
    // 🦘 MARSUPIAIS
    { nome: "Cuíca d'Água", variacao: "N", valor: 0.99, categoria: "🦘 Marsupiais" },
    
    // 🐴 CAVALOS / PÓNEIS
    { nome: "Pônei Bonito", variacao: "NR", valor: 9.99, categoria: "🐴 Cavalos/Póneis" },
    { nome: "Pônei Bonito", variacao: "NP", valor: 1.99, categoria: "🐴 Cavalos/Póneis" },
    { nome: "Pônei Shetland", variacao: "NR", valor: 1.89, categoria: "🐴 Cavalos/Póneis" },
    { nome: "Cavalo Alado", variacao: "F", valor: 1.65, categoria: "🐴 Cavalos/Póneis" },
    { nome: "Garanhão Flamejante", variacao: "R", valor: 1.65, categoria: "🐴 Cavalos/Póneis" },
    { nome: "Potro Flamejante", variacao: "M", valor: 3.99, categoria: "🐴 Cavalos/Póneis" },
    { nome: "Potro Flamejante", variacao: "NFR", valor: 1.99, categoria: "🐴 Cavalos/Póneis" },
    { nome: "Asneiro", variacao: "N", valor: 0.90, categoria: "🐴 Cavalos/Póneis" },
    
    // 🦌 CERVOS / RENAS
    { nome: "Rena", variacao: "N", valor: 14.99, categoria: "🦌 Cervos/Renas" },
    { nome: "Rena Biscoito", variacao: "R", valor: 1.65, categoria: "🦌 Cervos/Renas" },
    { nome: "Rena Biscoito", variacao: "NP", valor: 0.79, categoria: "🦌 Cervos/Renas" },
    { nome: "Cervo Dama do Inverno", variacao: "NP", valor: 0.79, categoria: "🦌 Cervos/Renas" },
    { nome: "Alce Morto-Vivo", variacao: "NP", valor: 0.99, categoria: "🦌 Cervos/Renas" },
    { nome: "Mamãe Moose", variacao: "NP", valor: 0.99, categoria: "🦌 Cervos/Renas" },
    
    // 🦏 ANIMAIS GRANDES
    { nome: "Rinoceronte Negro", variacao: "NP", valor: 0.80, categoria: "🦏 Animais Grandes" },
    { nome: "Hipopótamo", variacao: "NP", valor: 0.99, categoria: "🦏 Animais Grandes" },
    { nome: "Mamute Nevado", variacao: "NP", valor: 1.99, categoria: "🦏 Animais Grandes" },
    
    // 🐾 CRIATURAS MÍTICAS
    { nome: "Criosphinx", variacao: "NP", valor: 1.65, categoria: "🐾 Criaturas Míticas" },
    { nome: "Dimorphodon", variacao: "NP", valor: 0.89, categoria: "🐾 Criaturas Míticas" },
    { nome: "Ehecatl", variacao: "N", valor: 0.90, categoria: "🐾 Criaturas Míticas" },
    { nome: "Baku", variacao: "NP", valor: 0.79, categoria: "🐾 Criaturas Míticas" },
    { nome: "Yeti", variacao: "NP", valor: 1.25, categoria: "🐾 Criaturas Míticas" },
    { nome: "Pé Grande", variacao: "R", valor: 1.99, categoria: "🐾 Criaturas Míticas" },
    { nome: "Pé Grande", variacao: "NP", valor: 0.89, categoria: "🐾 Criaturas Míticas" },
    { nome: "Pé Grande Festivo", variacao: "M", valor: 2.99, categoria: "🐾 Criaturas Míticas" },
    { nome: "Pé Grande Festivo", variacao: "N", valor: 1.25, categoria: "🐾 Criaturas Míticas" },
    { nome: "Pé Grande Festivo", variacao: "NP", valor: 0.99, categoria: "🐾 Criaturas Míticas" },
    
    // 🎄 NATALINOS
    { nome: "Tio de Nadal", variacao: "NP", valor: 7.99, categoria: "🎄 Natalinos" },
    { nome: "Au Au Mouse de Natal", variacao: "NP", valor: 4.21, categoria: "🎄 Natalinos" },
    { nome: "Pequenatalino", variacao: "M", valor: 4.99, categoria: "🎄 Natalinos" },
    { nome: "Boneca Embrulhada", variacao: "NP", valor: 0.99, categoria: "🎄 Natalinos" },
    { nome: "Camaradinha do Tempo", variacao: "NP", valor: 0.79, categoria: "🎄 Natalinos" },
    
    // 🤖 ROBÔS / MECÂNICOS
    { nome: "Robô", variacao: "N", valor: 0.90, categoria: "🤖 Robôs/Mecânicos" },
    { nome: "Metal Ox", variacao: "R", valor: 1.23, categoria: "🤖 Robôs/Mecânicos" },
    { nome: "Metal Ox", variacao: "NP", valor: 0.25, categoria: "🤖 Robôs/Mecânicos" },
    
    // 🧸 ESPECIAIS
    { nome: "Mochi", variacao: "NP", valor: 0.99, categoria: "🧸 Especiais" },
    { nome: "Mochi", variacao: "N", valor: 4.99, categoria: "🧸 Especiais" },
    { nome: "Cubo de Morango", variacao: "NP", valor: 0.99, categoria: "🧸 Especiais" },
    { nome: "Gogumelo", variacao: "NP", valor: 1.25, categoria: "🧸 Especiais" },
    { nome: "Bolinhas Bobinhas", variacao: "NP", valor: 1.65, categoria: "🧸 Especiais" },
    { nome: "Fofoluch", variacao: "NP", valor: 0.99, categoria: "🧸 Especiais" },
    { nome: "Kaijunior", variacao: "N", valor: 5.99, categoria: "🧸 Especiais" },
    { nome: "Kaijunior", variacao: "NP", valor: 0.79, categoria: "🧸 Especiais" },
    { nome: "Kaijunior Tóxico", variacao: "N", valor: 0.89, categoria: "🧸 Especiais" },
    
    // 🐉 KITSUNES
    { nome: "Kitsune de Latte", variacao: "NP", valor: 5.99, categoria: "🐉 Kitsunes" },
    
    // 🦎 DIFERENTES
    { nome: "Billy Goat", variacao: "NP", valor: 0.89, categoria: "🦎 Diferentes" },
    { nome: "Black Widow", variacao: "NP", valor: 0.89, categoria: "🦎 Diferentes" },
    { nome: "Dodo", variacao: "NP", valor: 1.25, categoria: "🦎 Diferentes" },
    { nome: "Dusk", variacao: "N", valor: 19.99, categoria: "🦎 Diferentes" },
    { nome: "Solplanante", variacao: "NP", valor: 0.99, categoria: "🦎 Diferentes" },
    { nome: "Patinho Solar", variacao: "NFR", valor: 7.99, categoria: "🦎 Diferentes" },
    { nome: "Super Saru", variacao: "NP", valor: 1.54, categoria: "🦎 Diferentes" },
    { nome: "Axolotl", variacao: "R", valor: 7.32, categoria: "🦎 Diferentes" },
    { nome: "Ornitorrinco", variacao: "NP", valor: 5.32, categoria: "🦎 Diferentes" },
    { nome: "Arminho", variacao: "NR", valor: 1.90, categoria: "🦎 Diferentes" },
    { nome: "Galo", variacao: "NP", valor: 1.19, categoria: "🦎 Diferentes" },
    { nome: "Black Springer", variacao: "NR", valor: 6.50, categoria: "🦎 Diferentes" },
    { nome: "Black Springer", variacao: "N", valor: 5.99, categoria: "🦎 Diferentes" },
    { nome: "Blue Ringed", variacao: "R", valor: 1.65, categoria: "🦎 Diferentes" },
    { nome: "Spinel Marrom", variacao: "NP", valor: 0.99, categoria: "🦎 Diferentes" },
    { nome: "Spinel Preto", variacao: "FR", valor: 2.65, categoria: "🦎 Diferentes" },
    { nome: "Aranha Arrepiante", variacao: "NP", valor: 0.49, categoria: "🦎 Diferentes" },
    { nome: "DJ Soneca", variacao: "Neon", valor: 4.99, categoria: "🦎 Diferentes" },
    { nome: "Rocha Pedra", variacao: "NR", valor: 2.99, categoria: "🦎 Diferentes" },
    { nome: "Preguiça", variacao: "R", valor: 1.65, categoria: "🦎 Diferentes" },
    { nome: "Preguiça", variacao: "NP", valor: 0.90, categoria: "🦎 Diferentes" },
    { nome: "Dente de Sabre", variacao: "M", valor: 0.90, categoria: "🦎 Diferentes" },
    { nome: "Shia", variacao: "N", valor: 0.90, categoria: "🦎 Diferentes" },
    { nome: "Vela", variacao: "NP", valor: 0.89, categoria: "🦎 Diferentes" },
    { nome: "Mula Sem Cabeça", variacao: "NP", valor: 0.99, categoria: "🦎 Diferentes" },
    { nome: "Tan Chow Chow", variacao: "R", valor: 1.65, categoria: "🦎 Diferentes" },
    { nome: "Chow Chow Chocolate", variacao: "NP", valor: 0.79, categoria: "🦎 Diferentes" },
    { nome: "Selo de Fita", variacao: "Mega", valor: 2.99, categoria: "🦎 Diferentes" },
    { nome: "Selo de Fita", variacao: "N", valor: 0.90, categoria: "🦎 Diferentes" },
    { nome: "Formiga", variacao: "MFR", valor: 2.99, categoria: "🦎 Diferentes" },
    { nome: "Macaco", variacao: "MR", valor: 2.99, categoria: "🦎 Diferentes" },
    { nome: "Casuar", variacao: "R", valor: 1.65, categoria: "🦎 Diferentes" },
    { nome: "Chanekeh", variacao: "N", valor: 0.90, categoria: "🦎 Diferentes" },
    { nome: "Cero do Medo", variacao: "NP", valor: 0.99, categoria: "🦎 Diferentes" },
    { nome: "Pintinho do Mal", variacao: "NP", valor: 1.89, categoria: "🦎 Diferentes" },
    { nome: "Fleur de Gelo", variacao: "NP", valor: 0.89, categoria: "🦎 Diferentes" },
    { nome: "Gorila Astronauta", variacao: "NP", valor: 2.65, categoria: "🦎 Diferentes" },
    
    // 🚀 ITENS / VEÍCULOS / ACESSÓRIOS
    { nome: "Lápide da Invisibilidade", variacao: "🚀 Item", valor: 79.89, categoria: "🚀 Itens/Veículos" },
    { nome: "Estrela", variacao: "🚀 Item", valor: 16.89, categoria: "🚀 Itens/Veículos" },
    { nome: "Vassoura", variacao: "🚀 Item", valor: 14.99, categoria: "🚀 Itens/Veículos" },
    { nome: "Borrachão de Lava", variacao: "🚀 Item", valor: 13.99, categoria: "🚀 Itens/Veículos" },
    { nome: "Foguete Caseiro de Teleporte", variacao: "🚀 Item", valor: 9.99, categoria: "🚀 Itens/Veículos" },
    { nome: "Planador Asas de Esqueleto", variacao: "🚀 Item", valor: 8.99, categoria: "🚀 Itens/Veículos" },
    { nome: "Sabre de Gelo", variacao: "🚀 Item", valor: 8.99, categoria: "🚀 Itens/Veículos" },
    { nome: "Pena Teleporte", variacao: "🚀 Item", valor: 6.99, categoria: "🚀 Itens/Veículos" },
    { nome: "Lança-Fogos de Celebração", variacao: "🚀 Item", valor: 8.99, categoria: "🚀 Itens/Veículos" },
    { nome: "Canhão Pega-Urso", variacao: "🚀 Item", valor: 6.99, categoria: "🚀 Itens/Veículos" },
    { nome: "Caminhão de Sorvete", variacao: "🚀 Item", valor: 4.99, categoria: "🚀 Itens/Veículos" },
    { nome: "Barraca Clássica", variacao: "🚀 Item", valor: 4.99, categoria: "🚀 Itens/Veículos" },
    { nome: "Porta Mágica", variacao: "🚀 Item", valor: 4.99, categoria: "🚀 Itens/Veículos" },
    { nome: "Máquina de Dança", variacao: "🚀 Item", valor: 3.99, categoria: "🚀 Itens/Veículos" },
    { nome: "Barraca", variacao: "🚀 Item", valor: 3.99, categoria: "🚀 Itens/Veículos" },
    { nome: "Dispoplosion", variacao: "🚀 Item", valor: 2.99, categoria: "🚀 Itens/Veículos" },
    { nome: "Fogueira Premium", variacao: "🚀 Item", valor: 2.99, categoria: "🚀 Itens/Veículos" },
    { nome: "Planador Bala Ácida", variacao: "🚀 Item", valor: 2.99, categoria: "🚀 Itens/Veículos" },
    { nome: "Banco de Toras", variacao: "🚀 Item", valor: 1.99, categoria: "🚀 Itens/Veículos" },
    { nome: "Chapéu de Pé Grande", variacao: "🚀 Item", valor: 2.99, categoria: "🚀 Itens/Veículos" }
];
