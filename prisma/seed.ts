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
    }),
    prisma.user.create({
      data: {
        name: 'Alice Williams',
        email: 'alice@example.com'
      }
    }),
    prisma.user.create({
      data: {
        name: 'Charlie Brown',
        email: 'charlie@example.com'
      }
    }),
    prisma.user.create({
      data: {
        name: 'Diana Prince',
        email: 'diana@example.com'
      }
    }),
    prisma.user.create({
      data: {
        name: 'Edward Stark',
        email: 'edward@example.com'
      }
    }),
    prisma.user.create({
      data: {
        name: 'Fiona Green',
        email: 'fiona@example.com'
      }
    }),
    prisma.user.create({
      data: {
        name: 'George Martin',
        email: 'george@example.com'
      }
    }),
    prisma.user.create({
      data: {
        name: 'Helen Carter',
        email: 'helen@example.com'
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
    }),
    prisma.team.create({
      data: {
        name: 'Product Team'
      }
    }),
    prisma.team.create({
      data: {
        name: 'Design Team'
      }
    }),
    prisma.team.create({
      data: {
        name: 'QA Team'
      }
    }),
    prisma.team.create({
      data: {
        name: 'DevOps Team'
      }
    })
  ])

  // Create user-team relationships with overlapping memberships
  const userTeamRelations = [
    // Development Team members
    { userId: users[0].id, teamId: teams[0].id }, // John - Dev
    { userId: users[1].id, teamId: teams[0].id }, // Jane - Dev
    { userId: users[3].id, teamId: teams[0].id }, // Alice - Dev
    
    // Marketing Team members
    { userId: users[2].id, teamId: teams[1].id }, // Bob - Marketing
    { userId: users[4].id, teamId: teams[1].id }, // Charlie - Marketing
    { userId: users[5].id, teamId: teams[1].id }, // Diana - Marketing
    
    // Product Team members
    { userId: users[1].id, teamId: teams[2].id }, // Jane - Product (also in Dev)
    { userId: users[5].id, teamId: teams[2].id }, // Diana - Product (also in Marketing)
    { userId: users[6].id, teamId: teams[2].id }, // Edward - Product
    
    // Design Team members
    { userId: users[7].id, teamId: teams[3].id }, // Fiona - Design
    { userId: users[8].id, teamId: teams[3].id }, // George - Design
    
    // QA Team members
    { userId: users[3].id, teamId: teams[4].id }, // Alice - QA (also in Dev)
    { userId: users[9].id, teamId: teams[4].id }, // Helen - QA
    
    // DevOps Team members
    { userId: users[0].id, teamId: teams[5].id }, // John - DevOps (also in Dev)
    { userId: users[6].id, teamId: teams[5].id }, // Edward - DevOps (also in Product)
  ]

  await Promise.all(
    userTeamRelations.map(relation =>
      prisma.userTeam.create({
        data: relation
      })
    )
  )

  console.log('✅ Seed completed!')
  console.log(`Created ${users.length} users and ${teams.length} teams`)
  console.log(`Created ${userTeamRelations.length} user-team relationships`)
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
