#!/usr/bin/env node

/**
 * Script para executar a seed do banco de dados
 * Uso: node seed.js [--force]
 * O argumento --force faz com que a seed seja executada mesmo que já existam dados
 */

const { seedDatabase, isSeedNeeded } = require('../utils/dbSeed');
const { PrismaClient } = require('../../generated/prisma');
const prisma = new PrismaClient();

async function main() {
  try {
    const forceExecution = process.argv.includes('--force');
    
    if (forceExecution) {
      console.log('⚠️ Modo força ativado: a seed será executada mesmo se já existirem dados.');
      await seedDatabase();
    } else {
      const needSeed = await isSeedNeeded();
      
      if (needSeed) {
        await seedDatabase();
      } else {
        console.log('📋 O banco de dados já contém dados. Use a flag --force para executar a seed mesmo assim.');
      }
    }
  } catch (error) {
    console.error('Erro ao executar script de seed:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main(); 