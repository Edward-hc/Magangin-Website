const BASE_URL = 'http://localhost:5000';

export const postJob = async (jobData) => {
  const response = await fetch(`${BASE_URL}/jobs`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(jobData),
  });

  if (!response.ok) {
    throw new Error('Gagal menambahkan pekerjaan');
  }

  return response.json();
};
