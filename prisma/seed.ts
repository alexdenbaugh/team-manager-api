import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Starting seed...')
  
  await prisma.userTeam.deleteMany()
  await prisma.user.deleteMany()
  await prisma.team.deleteMany()

  // Create users
  const users = await Promise.all([
    prisma.user.create({
      data: {
        name: 'John Doe',
        email: 'john@example.com'
      }
    }),
    prisma.user.create({
      data: {
        name: 'Jane Smith',
        email: 'jane@example.com'
      }
    }),
    prisma.user.create({
      data: {
        name: 'Bob Johnson',
        email: 'bob@example.com'
      }
    })
  ])

  // Create teams
  const teams = await Promise.all([
    prisma.team.create({
      data: {
        name: 'Development Team'
      }
    }),
    prisma.team.create({
      data: {
        name: 'Marketing Team'
      }
    })
  ])

  // Create user-team relationships
  await Promise.all([
    prisma.userTeam.create({
      data: {
        userId: users[0].id,
        teamId: teams[0].id
      }
    }),
    prisma.userTeam.create({
      data: {
        userId: users[1].id,
        teamId: teams[0].id
      }
    }),
    prisma.userTeam.create({
      data: {
        userId: users[2].id,
        teamId: teams[1].id
      }
    })
  ])

  console.log('✅ Seed completed!')
  console.log(`Created ${users.length} users and ${teams.length} teams`)
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
