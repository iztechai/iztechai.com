import { useEffect, useState } from 'react';

const fetchMemberCount = async () => {
  try {
    const webhookURL =
      'https://n8n.ardasevinc.xyz/webhook/2b4b3123-da13-4d8e-b27d-8eea561f5347';
    const webhookResponse = await fetch(webhookURL, {
      method: 'GET',
    }).then((res) => res.json());

    const memberCount = webhookResponse?.memberCount;
    return memberCount;
  } catch (error) {
    console.log(error);
  }
};

const MemberCount = () => {
  const [memberCount, setMemberCount] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const id = setInterval(async () => {
      const members = await fetchMemberCount();
      setMemberCount(members);
      setLoading(false);
    }, 15000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className='relative max-w-sm mx-auto'>
      <section className='bg-contrast w-full rounded-lg p-4 mt-8'>
        <h2 className='font-heading text-2xl text-center mb-2'>Üye Sayısı</h2>
        {loading ? (
          <p className='text-center text-white text-3xl lg:text-4xl blur-md animate-pulse'>
            999
          </p>
        ) : (
          <p className='text-center text-white text-3xl lg:text-4xl'>
            {memberCount}
          </p>
        )}
        {/* <p className='text-center text-white text-2xl'>{memberCount}</p> */}
      </section>
      <span className='-top-1 -right-1 absolute w-4 h-4 bg-green-500 rounded-full animate-pulse'></span>
    </div>
  );
};

export default MemberCount;
