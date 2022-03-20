import {christmasTree} from '../src/christmasTree';

describe(christmasTree.name, () => {
    it('Test 1', () => {
        const response = christmasTree(1,3);
        expect(response).toEqual([
            "    *",
            "    *",
            "   ***",
            "  *****",
            " *******",
            "*********",
            "   ***"]);
    });
    it('Test 2', () => {
        const response = christmasTree(2,4);
        expect(response).toEqual([
            "      *",
            "      *",
            "     ***",
            "    *****",
            "   *******",
            "  *********",
            " ***********",
            "   *******",
            "  *********",
            " ***********",
            "*************",
            "    *****",
            "    *****"]);
    });
    it('Test 3', () => {
        const response = christmasTree(4,8);
        expect(response).toEqual([
            "            *",
            "            *",
            "           ***",
            "          *****",
            "         *******",
            "        *********",
            "       ***********",
            "      *************",
            "     ***************",
            "    *****************",
            "   *******************",
            "         *******",
            "        *********",
            "       ***********",
            "      *************",
            "     ***************",
            "    *****************",
            "   *******************",
            "  *********************",
            "        *********",
            "       ***********",
            "      *************",
            "     ***************",
            "    *****************",
            "   *******************",
            "  *********************",
            " ***********************",
            "       ***********",
            "      *************",
            "     ***************",
            "    *****************",
            "   *******************",
            "  *********************",
            " ***********************",
            "*************************",
            "        *********",
            "        *********",
            "        *********",
            "        *********"]);
    });
    it('Test 4', () => {
        const response = christmasTree(8,5);
        expect(response).toEqual([
            "             *",
            "             *",
            "            ***",
            "           *****",
            "          *******",
            "         *********",
            "        ***********",
            "       *************",
            "          *******",
            "         *********",
            "        ***********",
            "       *************",
            "      ***************",
            "         *********",
            "        ***********",
            "       *************",
            "      ***************",
            "     *****************",
            "        ***********",
            "       *************",
            "      ***************",
            "     *****************",
            "    *******************",
            "       *************",
            "      ***************",
            "     *****************",
            "    *******************",
            "   *********************",
            "      ***************",
            "     *****************",
            "    *******************",
            "   *********************",
            "  ***********************",
            "     *****************",
            "    *******************",
            "   *********************",
            "  ***********************",
            " *************************",
            "    *******************",
            "   *********************",
            "  ***********************",
            " *************************",
            "***************************",
            "           *****",
            "           *****",
            "           *****",
            "           *****",
            "           *****",
            "           *****",
            "           *****",
            "           *****"]);
    });
    it('Test 5', () => {
        const response = christmasTree(3,3);
        expect(response).toEqual([
            "      *",
            "      *",
            "     ***",
            "    *****",
            "   *******",
            "  *********",
            "   *******",
            "  *********",
            " ***********",
            "  *********",
            " ***********",
            "*************",
            "     ***",
            "     ***",
            "     ***"]);
    });
    it('Test 6', () => {
        const response = christmasTree(4,6);
        expect(response).toEqual([
            "          *",
            "          *",
            "         ***",
            "        *****",
            "       *******",
            "      *********",
            "     ***********",
            "    *************",
            "   ***************",
            "       *******",
            "      *********",
            "     ***********",
            "    *************",
            "   ***************",
            "  *****************",
            "      *********",
            "     ***********",
            "    *************",
            "   ***************",
            "  *****************",
            " *******************",
            "     ***********",
            "    *************",
            "   ***************",
            "  *****************",
            " *******************",
            "*********************",
            "       *******",
            "       *******",
            "       *******",
            "       *******"]);
    });
});