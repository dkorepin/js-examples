import { render, screen } from '@testing-library/react';
import { FakeServer } from './FakeServer';
import { fakeError, fakeSuccess } from './FakeServer.utils';
import { TFakeServerConfig, TResponse } from './FakeServer.types';

const fakeConfig: TFakeServerConfig<string> = {
    timeout: 10,
    result: {
        body: '',
        status: fakeSuccess.status,
    },
}

FakeServer.register('/success');
FakeServer.register('/custom', fakeConfig);

test('test FakeServer success case', () => {
    const successFetch = async () => {
        const res = await FakeServer.fetch('/success');
        expect(res.status).toBe(fakeSuccess.status);
    }

    return successFetch();
});

test('test FakeServer error case', () => {
    const successFetch = async () => {
        try {
            const res = await FakeServer.fetch('/error');
            expect(res).toBe(null);
        } catch (error) {
            expect((error as TResponse<string>).status).toBe(fakeError.status);
        }
    }

    return successFetch();
});

test('test FakeServer custom case', () => {
    const successFetch = async () => {
        const res = await FakeServer.fetch('/custom');
        expect(res.status).toBe(fakeSuccess.status);
    }

    return successFetch();
});
