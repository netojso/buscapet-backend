# Criação de usuário
**RF**

[x] O usuário deve conseguir criar uma conta usando nome e whatsapp;

**RNF**

[] Utilizar JWT para autenticar usuário;

**RN**

[x] O usuário não pode criar uma conta com WhatsApp já existente;

# Criação de dog

**RF**

[x] O usuário deve inserir raça, localização, descrição de onde encontrou;
[x] O usuário deve fazer upload de três fotos do dog;

**RNF**

- Utilizar recursos de Geolocalização do Expo para abstrair a latitude e longitude do usuário;
[x] Utilizar o Multer para upload de fotos no Disco;
- Utilizar alguma biblioteca de resize de imagens para comprimir imagens;

**RN**

- O usuário não pode criar o mesmo dog;
- O usuário pode ter até 3 dogs no mesmo endereço;

# Mapa

**RF**

- O mapa deve mostrar os dogs próximo do usuário;
- O mapa deve exibir uma foto do dog no mapa;
- O usuário pode pesquisar o dog pela raça;

**RNF**

- Utilizar os recursos de Mapa do Expo;

**RN**

- Deve ter um raio de 5km;

# Dados do Pet

**RF**

- Deve exibir descrição de como encontrou o dog;
- Deve exibir as fotos do dog;
- Deve permitir que o usuário entre em contato com o usuário que encontrou;

**RNF**


**RN**

- O possível dono precisará enviar uma foto com o dog perdido;

# Página de perfil

**RF**

- O usuário deve poder listar todos dogs cadastrados;

**RNF**


**RN**

- Deve haver um ticket no box de cada dog com a informação 'Pendente' ou 'Entregue';
