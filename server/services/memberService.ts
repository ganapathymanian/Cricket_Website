import { Member } from '../types'; // Assuming you have a Member type defined in your types/index.ts
import { prisma } from '../db/schema.prisma'; // Adjust the import based on your Prisma setup

class MemberService {
    async registerMember(memberData: Member): Promise<Member> {
        const newMember = await prisma.member.create({
            data: memberData,
        });
        return newMember;
    }

    async getMemberById(memberId: string): Promise<Member | null> {
        const member = await prisma.member.findUnique({
            where: { id: memberId },
        });
        return member;
    }

    async updateMember(memberId: string, memberData: Partial<Member>): Promise<Member> {
        const updatedMember = await prisma.member.update({
            where: { id: memberId },
            data: memberData,
        });
        return updatedMember;
    }

    async deleteMember(memberId: string): Promise<Member> {
        const deletedMember = await prisma.member.delete({
            where: { id: memberId },
        });
        return deletedMember;
    }

    async getAllMembers(): Promise<Member[]> {
        const members = await prisma.member.findMany();
        return members;
    }
}

export const memberService = new MemberService();
