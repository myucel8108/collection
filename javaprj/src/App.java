import java.util.HashSet;
import java.util.Iterator;
import java.util.Set;

public class App {
    public static void main(String[] args) throws Exception {
        Set<Integer> set = new HashSet<>();
        set.add(3);
        set.add(4);
        set.add(5);
        set.add(6);
        
        System.out.println(set.size());
        //iterator는 직접 next를 가지지 않았을까?

        //iterator는 무엇일까
        Iterator<Integer> it = set.iterator();
        while(it.hasNext()){
            System.out.println(it.next());

        }

    }
}
