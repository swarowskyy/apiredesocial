# Configuração do Projeto NestJS com TypeORM e MySQL

## 1. Criar o projeto NestJS e acessar o diretório

```bash
npx @nestjs/cli new backend
cd backend
```

## 2. Instalar dependências do TypeORM e driver MySQL

```bash
npm install @nestjs/typeorm typeorm mysql2
```

## 3. Gerar entidades automaticamente a partir do MySQL

```bash
npx typeorm-model-generator -h localhost -p 3306 -d rede_social -u root -e mysql -o ./src/entities --noConfig
```

