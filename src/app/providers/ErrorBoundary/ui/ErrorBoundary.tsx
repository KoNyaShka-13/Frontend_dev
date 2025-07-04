import React, { ErrorInfo, ReactNode, Suspense } from 'react';
import { ErrorPage } from 'widgets/ErrorPage/ui/ErrorPage';
// Не отлавливает ошибки в асинхронном коде, ошибки в серверном рендеринге, ошибки в самом Error Boundary и др.
interface ErrorBoundaryProps { // Типизируем пропсы
    children: ReactNode; // Под реакт нод попадает любой компонент реакт
}

interface ErrorBoundaryState { // Типизируем стейты
    hasError: boolean;
}

class ErrorBoundary
    extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        // You can also log the error to an error reporting service
        console.log(error, errorInfo); // Логгируем ошибки
    }

    render() {
        const { hasError } = this.state;
        const { children } = this.props;

        if (hasError) {
            // You can render any custom fallback UI
            return (
                <Suspense fallback="">
                    <ErrorPage />
                </Suspense>
            );
        }

        return children;
    }
}

export default ErrorBoundary;
