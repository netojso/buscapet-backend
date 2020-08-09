# Criação de usuário
**RF**

- O usuário deve conseguir criar uma conta usando name, email e senha;
- O usuário deve inserir seu whatsapp;

**RNF**

- Utilizar JWT para autenticar usuário;
- Utilizar Bcrypt para criptografar senha.

**RN**

- O usuário não pode criar uma conta com email já existente;
- O usuário deve usar senha maior que 6 dígitos;

# Criação de dog

**RF**

- O usuário deve inserir raça, localização, descrição de onde encontrou;
- O usuário deve fazer upload de três fotos do dog;

**RNF**

- Utilizar recursos de Geolocalização do Expo para abstrair a latitude e longitude do usuário;
- Utilizar o Multer para upload de fotos no Disco;
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
