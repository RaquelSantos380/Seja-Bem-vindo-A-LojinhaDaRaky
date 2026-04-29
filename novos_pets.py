#!/usr/bin/env python3
# -*- coding: utf-8 -*-

# Lista de novos pets para adicionar
novos_pets = [
    {"nome": "Dragão Antigo", "categoria": "Lendario", "valor": 0.89},
    {"nome": "Dusty", "categoria": "Lendario", "valor": 4.99},
    {"nome": "Dusty N", "categoria": "Lendario", "valor": 23.89},
    {"nome": "Unicórnio Doce", "categoria": "Lendario", "valor": 14.99},
    {"nome": "Doggy Corn", "categoria": "Lendario", "valor": 8.99},
    {"nome": "Bode Neon", "categoria": "Lendario", "valor": 4.89},
    {"nome": "Dragão MFR", "categoria": "Lendario", "valor": 19.99},
    {"nome": "Frost Furry", "categoria": "Lendario", "valor": 23.99},
    {"nome": "Uni do Mal NFR", "categoria": "Lendario", "valor": 329.90},
    {"nome": "Uni do Mal R", "categoria": "Lendario", "valor": 159.89},
    {"nome": "Grifo NFR", "categoria": "Lendario", "valor": 6.99},
    {"nome": "Libélula NR", "categoria": "Lendario", "valor": 4.99},
    {"nome": "Libélula NP", "categoria": "Lendario", "valor": 0.88},
    {"nome": "Canguru R", "categoria": "Lendario", "valor": 28.78},
    {"nome": "Bat Fada NFR", "categoria": "Lendario", "valor": 69.99},
    {"nome": "Shadow NFR", "categoria": "Lendario", "valor": 1649.49},
    {"nome": "Tartaruga NP", "categoria": "Lendario", "valor": 40.89},
    {"nome": "Tartaruga R", "categoria": "Lendario", "valor": 40.89},
    {"nome": "Ovos", "categoria": "Comum", "valor": 0.25},
    {"nome": "Corvo Papagaio NFR e Lendários NFR", "categoria": "Lendario", "valor": 7.99},
    {"nome": "Unicórnio NFR", "categoria": "Lendario", "valor": 19.89},
    {"nome": "Chocolate Pinguim Mega", "categoria": "Lendario", "valor": 12.99},
    {"nome": "Estrela (Veículo)", "categoria": "Lendario", "valor": 19.99},
    {"nome": "Coruja Roxa", "categoria": "Lendario", "valor": 3.99},
    {"nome": "Hamster Mega", "categoria": "Lendario", "valor": 18.99},
    {"nome": "Urso Lendário Azul Claro", "categoria": "Lendario", "valor": 12.99},
    {"nome": "Elefante", "categoria": "Raro", "valor": 28.99},
    {"nome": "Ovo Cristal", "categoria": "Lendario", "valor": 0.99},
    {"nome": "Ovo Admin Abuse", "categoria": "Lendario", "valor": 0.99},
    {"nome": "Pônei Preto em Chamas R", "categoria": "Lendario", "valor": 1.65},
    {"nome": "Kaiúnior N", "categoria": "Lendario", "valor": 4.29},
    {"nome": "Pônei Bonito NP", "categoria": "Ultra-Raro", "valor": 2.99},
    {"nome": "Pônei Bonito Neon", "categoria": "Ultra-Raro", "valor": 7.99},
    {"nome": "Neons Comuns (ex: Shiba Inu N)", "categoria": "Comum", "valor": 0.89},
    {"nome": "Mochi Gato MR", "categoria": "Lendario", "valor": 6.99},
    {"nome": "Lebre", "categoria": "Ultra-Raro", "valor": 9.99},
    {"nome": "Macaco Preto + Papagaio Branco", "categoria": "Lendario", "valor": 4.20},
    {"nome": "Panda NFR", "categoria": "Lendario", "valor": 4.99},
    {"nome": "Lobo NR", "categoria": "Incomum", "valor": 7.99},
    {"nome": "Lobo NP", "categoria": "Incomum", "valor": 0.99},
    {"nome": "Caminhão de Sorvete", "categoria": "Lendario", "valor": 6.99},
    {"nome": "Vassoura Encantada", "categoria": "Lendario", "valor": 13.99},
    {"nome": "Poção Montar", "categoria": "Lendario", "valor": 2.65},
    {"nome": "Poção Voar", "categoria": "Lendario", "valor": 4.50},
    {"nome": "Pinguim Doce R", "categoria": "Lendario", "valor": 37.99},
    {"nome": "Poodle MR", "categoria": "Raro", "valor": 3.99},
    {"nome": "Iéti de Natal M", "categoria": "Ultra-Raro", "valor": 7.99},
    {"nome": "Pena Teletransportadora", "categoria": "Lendario", "valor": 9.99},
    {"nome": "Crocodilo Neon", "categoria": "Ultra-Raro", "valor": 69.99},
    {"nome": "Touca de Natal", "categoria": "Raro", "valor": 2.99},
    {"nome": "Carro de Donald", "categoria": "Lendario", "valor": 5.99},
    {"nome": "Nuvem", "categoria": "Lendario", "valor": 8.99},
    {"nome": "Bola Antiga de Neve", "categoria": "Ultra-Raro", "valor": 5.99},
    {"nome": "Fogos de Artifício", "categoria": "Lendario", "valor": 5.99},
    {"nome": "Barraca de Troca", "categoria": "Lendario", "valor": 5.99},
    {"nome": "Porta Mágica", "categoria": "Lendario", "valor": 6.99},
    {"nome": "Foguete Mágico", "categoria": "Lendario", "valor": 9.99},
    {"nome": "Tumba Fantasmificadora", "categoria": "Lendario", "valor": 99.99},
    {"nome": "Canhão", "categoria": "Lendario", "valor": 6.99},
    {"nome": "Fênix Montável", "categoria": "Lendario", "valor": 1.75},
]

import re

# Ler o arquivo pets.js
with open('pets.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Encontrar o último pet no array
ultimo_pet = content.rfind('}')
ultimo_fechamento = content.rfind(']')

# Criar os novos pets em formato JavaScript
novos_js = ""
for pet in novos_pets:
    novos_js += f'    {{ nome: "{pet["nome"]}", categoria: "{pet["categoria"]}", valor: {pet["valor"]:.2f} }},\n'

# Inserir os novos pets antes do fechamento do array
novo_content = content[:ultimo_pet+1] + ',\n' + novos_js + content[ultimo_pet+1:]

# Salvar o arquivo
with open('pets.js', 'w', encoding='utf-8') as f:
    f.write(novo_content)

print(f"✅ {len(novos_pets)} novos pets adicionados com sucesso!")
print("🚀 Agora execute: git add pets.js && git commit -m 'Novos pets adicionados' && git push")
