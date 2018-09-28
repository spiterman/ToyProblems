/**
DNA Sequence

The information in DNA is stored as a sequence of four chemical bases (adenine, guanine, cytosine, and thymine). These four bases are often represented by the letters A, G, C and T. Sequences of DNA, then, can be represented by strings of these characters.

Imagine the task of checking whether a given genome (long string of "ACGT" bases) contains a specified gene (shorter sequence of bases) as a substring. One way to do this is to loop over every index in the genome, and try to match the gene sequence from each location. This will take (in the worst case) a number of steps proportional to the length of the genome multiplied by the length of the gene sequence.

It's possible to do better than this, however. Imagine we are searching for the simple gene sequence "TCGATCGAA" in a 100-base genome that starts with bases 'TCGATCGAT....'. This does not match our search sequence (it ends in a T rather than an A). As we loop over the nine bases in the search sequence, we will detect this mismatch on the 9th iteration. At this point, the naive algorithm would go back and run the entire matching process starting from the 2nd index in the genome. This is unnecessary. The gene sequence we are searching for ("TCGATCGAA") is such that if a match gets all the way to the 9th base, the next point that it could possibly match starts at the 5th base in the genome. Furthermore, we already know that the 1st four bases starting from the 5th index match our search sequence. This is true because the search sequence matches its own prefix when overlapped by 5 characters, and we know that the 1st 8 bases in the genome match the search sequence.

More generally, as we scan forward across the genome, the search sequence itself contains enough information that we never need to backtrack. Whenever a base does not match the next base in our search sequence, we can simply reset the start location, with the knowledge that all bases from the search start location up to the current point in the genome match.

This can be made more crisp by representing the search sequence with a state machine. The state machine will start with a number of states and edges equal to the number of bases in the search sequence, plus an end state. For example, the state machine to match the sequence "CAT" would look like this.

STATE_1 --C--> STATE_2 --A--> STATE_3 --T--> END

This would simply look for the bases "C", "A", "T" in sequence, and then enter the end state to indicate a match. To make this state machine process a longer genome in a single linear pass, we would go over it, and add edges from each state pointing back to earlier states, representing what to do if a base other than the next base in the sequence is found. For example, if we are in state 3 and see a "C" rather than a "T", we should transition back to state 2. A similar rule would be added to state 2, pointing to itself in the case of a multiple "C". Finally, we would add edges for "G" from all states back to state 1. This state machine would then allow us to search for the sequence "CAT" in a single linear pass. More complicated search sequences (with more self-overlapping sequences) will require more complicated processing. But the key is that this is an operation on the search sequence, and once the state machine is built, it can be used to search arbitrary genomes in linear time.

We would like you to implement this algorithm! Write a function that takes a genome (string of ACTG chars) and a gene sequence (another string), and returns a bool indicating whether the gene is found in the genome. This should use the algorithm above, and run in linear time.

Here are some example test cases you might find useful:

<pre>
gene_search("ACCATGCA", "CAT") # => True
gene_search("CATTGA", "CAT") # => True
gene_search("GGCACACATG", "CACAT") # => True
gene_search("CAAAT", "CAT") # => False
</pre>

*/


function geneSearch(){

}
