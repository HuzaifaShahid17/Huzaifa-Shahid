"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import NumberTicker from './magicui/number-ticker'

export default function LayoutClient({ children }) {
	const [loading, setLoading] = useState(false);
	const router = useRouter();

	useEffect(() => {
		
	}, [router]);

	return (
		<>
			{loading && <NumberTicker/>}
			{children}
		</>
	);
}
