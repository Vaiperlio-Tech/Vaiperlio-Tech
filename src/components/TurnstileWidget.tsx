"use client";

interface TurnstileWidgetProps {
  callback: () => void;
  expired: () => void;
  error: () => void;
}

export default function TurnstileWidget({
  callback,
  error,
  expired,
}: TurnstileWidgetProps) {
  return (
    <div
      className="cf-turnstile w-full flex justify-center items-center my-2"
      data-sitekey="0x4AAAAAACBP2YpVHxHZTrrg"
      data-theme="light"
      data-size="normal"
      data-callback={callback}
      data-expired-callback={expired}
      data-error-callback={error}
    ></div>
  );
}
