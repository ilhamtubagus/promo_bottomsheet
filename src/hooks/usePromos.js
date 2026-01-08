import { useState, useCallback, useEffect } from 'react';
import { fetchPromos } from '../services/promoService';

export const usePromos = () => {
  const [promos, setPromos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const loadPromos = useCallback(async (pageNum) => {
    if (isLoading || (pageNum > 1 && !hasMore)) return;

    setIsLoading(true);
    try {
      const response = await fetchPromos(pageNum);
      const { totalPage, data } = response;

      setPromos((prev) => (pageNum === 1 ? data : [...prev, ...data]));

      if (pageNum >= totalPage || data.length === 0) {
        setHasMore(false);
      } else {
        setHasMore(true);
      }
    } catch (error) {
      console.error('Error fetching promos:', error);
    } finally {
      setIsLoading(false);
    }
  }, [isLoading, hasMore]);

  useEffect(() => {
    loadPromos(1);
  }, []);

  const fetchMore = () => {
    if (!isLoading && hasMore) {
      const nextPage = page + 1;
      setPage(nextPage);
      loadPromos(nextPage);
    }
  };

  return { promos, isLoading, fetchMore, hasMore };
};