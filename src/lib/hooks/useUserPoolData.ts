import { PoolInstance } from '@zero-tech/zfi-sdk';
import { useQuery } from 'react-query';

const useUserPoolData = (poolInstance: PoolInstance, account: string) => {
	return useQuery(
		['deposits', { account, poolAddress: poolInstance.address }],
		async () => {
			const [deposits, rewards] = await Promise.all([
				poolInstance.getAllDeposits(account),
				poolInstance.pendingYieldRewards(account),
			]);
			return { deposits, rewards };
		},
	);
};

export default useUserPoolData;
