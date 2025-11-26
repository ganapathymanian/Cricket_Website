import { NextApiRequest, NextApiResponse } from 'next';
import { validateMemberData } from './validators';
import { createMember, getMembers } from '../../../server/services/memberService';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    switch (req.method) {
        case 'POST':
            const validationResult = validateMemberData(req.body);
            if (!validationResult.isValid) {
                return res.status(400).json({ error: validationResult.errors });
            }
            try {
                const newMember = await createMember(req.body);
                return res.status(201).json(newMember);
            } catch (error) {
                return res.status(500).json({ error: 'Failed to create member' });
            }
        case 'GET':
            try {
                const members = await getMembers();
                return res.status(200).json(members);
            } catch (error) {
                return res.status(500).json({ error: 'Failed to fetch members' });
            }
        default:
            res.setHeader('Allow', ['POST', 'GET']);
            return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
